import { NextResponse } from 'next/server';
import staticVideos from '@/lib/static-yt-videos.json';

const YOUTUBE_HANDLE = '@Bethesda_AG';
const YOUTUBE_CHANNEL_ID = 'UCnQD9HnHdoVQOdY3oDrw2-Q';

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
  embedUrl: string;
}

export interface LiveStreamStatus {
  isLive: boolean;
  liveVideo: YouTubeVideo | null;
}

// In-memory cache for fast server responses
let cachedVideos: YouTubeVideo[] = staticVideos as YouTubeVideo[];
let cachedLiveStatus: LiveStreamStatus = { isLive: false, liveVideo: null };
let lastFetchTime = 0;

const CACHE_DURATION_MS = 2 * 60 * 1000; // Refresh every 2 minutes

async function fetchVideoOEmbed(
  videoId: string
): Promise<{ title: string } | null> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      { cache: 'no-store' }
    );
    if (res.ok) {
      const data = await res.json();
      return { title: data.title };
    }
  } catch {
    // ignore
  }
  return null;
}

/** Scrapes both /streams (past live services) and /videos (uploads) from YouTube channel */
async function scrapeAllVideosFromYouTube(): Promise<YouTubeVideo[]> {
  try {
    const headers = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
    };

    // Parallel fetch both /streams (for live services) and /videos (for uploads)
    const [streamsRes, videosRes] = await Promise.all([
      fetch(`https://www.youtube.com/${YOUTUBE_HANDLE}/streams`, { headers, cache: 'no-store' }),
      fetch(`https://www.youtube.com/${YOUTUBE_HANDLE}/videos`, { headers, cache: 'no-store' }),
    ]);

    const seen = new Set<string>();
    const videos: YouTubeVideo[] = [];

    function extractFromHtml(html: string) {
      const match =
        html.match(/var ytInitialData = ({[\s\S]*?});<\/script>/) ||
        html.match(/ytInitialData"\s*:\s*({[\s\S]*?})\s*;\s*</);

      if (!match) return;

      try {
        const ytData = JSON.parse(match[1]);

        function walk(obj: any) {
          if (!obj || typeof obj !== 'object') return;
          if (Array.isArray(obj)) {
            for (const item of obj) walk(item);
            return;
          }

          if (obj.lockupViewModel) {
            const lv = obj.lockupViewModel;
            let videoId: string | null = null;

            const thumbUrl = lv.contentImage?.thumbnailViewModel?.image?.sources?.[0]?.url;
            if (thumbUrl) {
              const m = thumbUrl.match(/\/vi\/([a-zA-Z0-9_-]{11})\//);
              if (m) videoId = m[1];
            }

            const title = lv.metadata?.lockupMetadataViewModel?.title?.content;

            let publishedAt = '';
            const metaRows =
              lv.metadata?.lockupMetadataViewModel?.metadata?.contentMetadataViewModel
                ?.metadataRows;

            if (metaRows) {
              for (const row of metaRows) {
                for (const part of row.metadataParts || []) {
                  const text = part.text?.content || '';
                  if (
                    text.includes('ago') ||
                    text.includes('year') ||
                    text.includes('month') ||
                    text.includes('week') ||
                    text.includes('day') ||
                    text.includes('Streamed')
                  ) {
                    publishedAt = text;
                  }
                }
              }
            }

            if (videoId && title && !seen.has(videoId)) {
              seen.add(videoId);
              videos.push({
                id: videoId,
                title,
                thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
                publishedAt: publishedAt || 'Recently streamed',
                url: `https://www.youtube.com/watch?v=${videoId}`,
                embedUrl: `https://www.youtube.com/embed/${videoId}`,
              });
            }
          }

          for (const k of Object.keys(obj)) {
            if (k !== 'lockupViewModel') walk(obj[k]);
          }
        }

        walk(ytData);
      } catch (err) {
        console.warn('[YT API] JSON parse error in html extract:', err);
      }
    }

    if (streamsRes.ok) extractFromHtml(await streamsRes.text());
    if (videosRes.ok) extractFromHtml(await videosRes.text());

    if (videos.length === 0) return staticVideos as YouTubeVideo[];
    return videos;
  } catch (error) {
    console.warn('[YT API] Scrape error, falling back to static videos:', error);
    return staticVideos as YouTubeVideo[];
  }
}

async function checkLiveStatus(): Promise<LiveStreamStatus> {
  // Check YouTube API key if provided
  const apiKey = process.env.YOUTUBE_API_KEY || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  if (apiKey) {
    try {
      const apiRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&eventType=live&key=${apiKey}`,
        { cache: 'no-store' }
      );
      if (apiRes.ok) {
        const data = await apiRes.json();
        if (data.items?.length > 0) {
          const item = data.items[0];
          const videoId = item.id.videoId;
          return {
            isLive: true,
            liveVideo: {
              id: videoId,
              title: item.snippet.title || 'Bethesda AG Church Live Service',
              thumbnail:
                item.snippet.thumbnails?.high?.url ||
                `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
              publishedAt: 'LIVE NOW',
              url: `https://www.youtube.com/watch?v=${videoId}`,
              embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
            },
          };
        }
      }
    } catch (e) {
      console.warn('[YT API] Live API check failed:', e);
    }
  }

  // Fallback: check YouTube live redirect URL
  try {
    const liveRes = await fetch(`https://www.youtube.com/${YOUTUBE_HANDLE}/live`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      redirect: 'follow',
      cache: 'no-store',
    });

    const isWatchUrl = liveRes.url.includes('/watch?v=');
    const watchVideoId = isWatchUrl
      ? liveRes.url.match(/\/watch\?v=([a-zA-Z0-9_-]{11})/)?.[1]
      : null;

    if (isWatchUrl && watchVideoId) {
      const oembed = await fetchVideoOEmbed(watchVideoId);
      return {
        isLive: true,
        liveVideo: {
          id: watchVideoId,
          title: oembed?.title || 'Bethesda AG Church Live Service',
          thumbnail: `https://i.ytimg.com/vi/${watchVideoId}/hqdefault.jpg`,
          publishedAt: 'LIVE NOW',
          url: `https://www.youtube.com/watch?v=${watchVideoId}`,
          embedUrl: `https://www.youtube.com/embed/${watchVideoId}?autoplay=1`,
        },
      };
    }
  } catch (err) {
    console.warn('[YT API] Live stream check error:', err);
  }

  return { isLive: false, liveVideo: null };
}

export async function GET() {
  const now = Date.now();

  if (now - lastFetchTime > CACHE_DURATION_MS || cachedVideos.length === 0) {
    const [fetchedVideos, liveStatus] = await Promise.all([
      scrapeAllVideosFromYouTube(),
      checkLiveStatus(),
    ]);

    cachedVideos = fetchedVideos;
    cachedLiveStatus = liveStatus;
    lastFetchTime = now;
  }

  // Prepend active live stream to the very top if live
  let videos = cachedVideos;
  if (cachedLiveStatus.isLive && cachedLiveStatus.liveVideo) {
    const lv = cachedLiveStatus.liveVideo;
    if (!videos.find((v) => v.id === lv.id)) {
      videos = [lv, ...videos];
    }
  }

  return NextResponse.json({
    isLive: cachedLiveStatus.isLive,
    liveVideo: cachedLiveStatus.liveVideo,
    videos,
    channelUrl: `https://www.youtube.com/${YOUTUBE_HANDLE}`,
    channelHandle: YOUTUBE_HANDLE,
    updatedAt: new Date(lastFetchTime).toISOString(),
  });
}
