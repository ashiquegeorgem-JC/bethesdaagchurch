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

// ── Server-side in-memory cache ──────────────────────────────────
let cachedVideos: YouTubeVideo[] = staticVideos as YouTubeVideo[];
let cachedLiveStatus: LiveStreamStatus = { isLive: false, liveVideo: null };
let lastVideoFetchTime = 0;
let lastLiveCheckTime = 0;

const VIDEO_CACHE_MS = 5 * 60 * 1000;  // Refresh video list every 5 minutes
const LIVE_CACHE_MS  = 60 * 1000;       // Re-check live status every 60 seconds

// ── RSS Feed: most reliable no-auth way to get latest uploads ───
async function fetchVideosFromRSS(): Promise<YouTubeVideo[]> {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
    const res = await fetch(rssUrl, {
      headers: { 'Accept': 'application/rss+xml, application/xml, text/xml' },
      // No next.js cache — we control caching ourselves in-memory
      cache: 'no-store',
    });

    if (!res.ok) {
      console.warn('[YT] RSS feed responded with', res.status);
      return [];
    }

    const xml = await res.text();

    // Parse <entry> blocks from Atom XML
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    const videos: YouTubeVideo[] = [];

    for (const [, entry] of entries) {
      const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
      const title = entry.match(/<title>([^<]+)<\/title>/)?.[1]
        ?.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
      const published = entry.match(/<published>([^<]+)<\/published>/)?.[1];
      const thumbUrl = entry.match(/url="([^"]+\.jpg[^"]*)"/)?.[1];

      if (!id || !title) continue;

      videos.push({
        id,
        title,
        thumbnail: thumbUrl || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        publishedAt: published || new Date().toISOString(),
        url: `https://www.youtube.com/watch?v=${id}`,
        embedUrl: `https://www.youtube.com/embed/${id}`,
      });
    }

    console.log(`[YT] RSS returned ${videos.length} videos`);
    return videos;
  } catch (err) {
    console.warn('[YT] RSS fetch failed:', err);
    return [];
  }
}

// ── oEmbed helper (used for getting live video title) ────────────
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

// ── Live status check ────────────────────────────────────────────
async function checkLiveStatus(): Promise<LiveStreamStatus> {
  // Method 1: Official YouTube Data API v3 (if API key is set)
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
              title: item.snippet.title || 'Bethesda AG Church – Live',
              thumbnail:
                item.snippet.thumbnails?.high?.url ||
                `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
              publishedAt: item.snippet.publishedAt || new Date().toISOString(),
              url: `https://www.youtube.com/watch?v=${videoId}`,
              embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
            },
          };
        }
      }
    } catch (e) {
      console.warn('[YT] API live check failed:', e);
    }
  }

  // Method 2: Redirect trick — YouTube /live redirects to the active watch URL when live
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
    const videoId = isWatchUrl
      ? liveRes.url.match(/\/watch\?v=([a-zA-Z0-9_-]{11})/)?.[1]
      : null;

    if (isWatchUrl && videoId) {
      const oembed = await fetchVideoOEmbed(videoId);
      return {
        isLive: true,
        liveVideo: {
          id: videoId,
          title: oembed?.title || 'Bethesda AG Church – Live',
          thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          publishedAt: new Date().toISOString(),
          url: `https://www.youtube.com/watch?v=${videoId}`,
          embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
        },
      };
    }
  } catch (err) {
    console.warn('[YT] Live redirect check error:', err);
  }

  return { isLive: false, liveVideo: null };
}

// ── API Route ────────────────────────────────────────────────────
export async function GET() {
  const now = Date.now();

  // Refresh the video list every 5 minutes from RSS
  if (now - lastVideoFetchTime > VIDEO_CACHE_MS) {
    const rssVideos = await fetchVideosFromRSS();
    if (rssVideos.length > 0) {
      cachedVideos = rssVideos;
    }
    // Always update the timestamp so we don't hammer RSS on every failure
    lastVideoFetchTime = now;
  }

  // Re-check live status every 60 seconds
  if (now - lastLiveCheckTime > LIVE_CACHE_MS) {
    try {
      cachedLiveStatus = await checkLiveStatus();
    } catch {
      // Keep previous status on error
    }
    lastLiveCheckTime = now;
  }

  // If we're live, prepend the live video to the top of the list
  let videos = cachedVideos;
  if (cachedLiveStatus.isLive && cachedLiveStatus.liveVideo) {
    const lv = cachedLiveStatus.liveVideo;
    // Only prepend if it's not already in the list
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
    // Let clients know when this data was last refreshed
    videosUpdatedAt: new Date(lastVideoFetchTime || now).toISOString(),
    liveCheckedAt: new Date(lastLiveCheckTime || now).toISOString(),
  });
}
