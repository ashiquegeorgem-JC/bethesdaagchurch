import { NextResponse } from 'next/server';

const YOUTUBE_CHANNEL_ID = 'UCnQD9HnHdoVQOdY3oDrw2-Q';
const YOUTUBE_HANDLE = '@Bethesda_AG';
const RSS_FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
}

async function fetchYouTubeVideos(): Promise<YouTubeVideo[]> {
  try {
    // Try RSS feed first
    const response = await fetch(RSS_FEED_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });

    if (response.ok) {
      const xml = await response.text();
      return parseRSSFeed(xml);
    }

    // Fallback: try with handle-based feed
    const handleResponse = await fetch(
      `https://www.youtube.com/feeds/videos.xml?user=${YOUTUBE_HANDLE}`,
      {
        next: { revalidate: 3600 },
        headers: { 'User-Agent': 'Mozilla/5.0' },
      }
    );

    if (handleResponse.ok) {
      const xml = await handleResponse.text();
      return parseRSSFeed(xml);
    }

    // If RSS feeds fail, return curated channel videos from YouTube page scraping
    return await scrapeChannelVideos();
  } catch (error) {
    console.error('Failed to fetch YouTube videos:', error);
    return await scrapeChannelVideos();
  }
}

function parseRSSFeed(xml: string): YouTubeVideo[] {
  const videos: YouTubeVideo[] = [];
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;

  while ((match = entryRegex.exec(xml)) !== null && videos.length < 15) {
    const entry = match[1];
    const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] || '';
    const title = entry.match(/<title>(.*?)<\/title>/)?.[1] || '';
    const published = entry.match(/<published>(.*?)<\/published>/)?.[1] || '';

    if (videoId) {
      videos.push({
        id: videoId,
        title: decodeXMLEntities(title),
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        publishedAt: published,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      });
    }
  }

  return videos;
}

async function scrapeChannelVideos(): Promise<YouTubeVideo[]> {
  try {
    const response = await fetch(`https://www.youtube.com/${YOUTUBE_HANDLE}/videos`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    if (!response.ok) return getStaticFallbackVideos();

    const html = await response.text();

    // Extract video IDs from the page HTML
    const videoIdRegex = /\/watch\?v=([a-zA-Z0-9_-]{11})/g;
    const titleRegex = /"title":\s*\{"runs":\s*\[\{"text":\s*"([^"]+)"\}/g;
    const seen = new Set<string>();
    const videos: YouTubeVideo[] = [];
    let videoMatch;

    while ((videoMatch = videoIdRegex.exec(html)) !== null && videos.length < 15) {
      const videoId = videoMatch[1];
      if (!seen.has(videoId)) {
        seen.add(videoId);
        videos.push({
          id: videoId,
          title: `Bethesda AG Church Service`,
          thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          publishedAt: new Date().toISOString(),
          url: `https://www.youtube.com/watch?v=${videoId}`,
        });
      }
    }

    // Try to extract titles from ytInitialData
    const ytDataMatch = html.match(/var ytInitialData = ({.+});<\/script>/);
    if (ytDataMatch) {
      try {
        const data = JSON.parse(ytDataMatch[1]);
        const tabs = data?.contents?.twoColumnBrowseResultsRenderer?.tabs;
        if (tabs) {
          for (const tab of tabs) {
            const tabContent = tab?.tabRenderer?.content;
            const items = tabContent?.richGridRenderer?.contents;
            if (items) {
              let idx = 0;
              for (const item of items) {
                const videoRenderer = item?.richItemRenderer?.content?.videoRenderer;
                if (videoRenderer && idx < videos.length) {
                  videos[idx].title = videoRenderer.title?.runs?.[0]?.text || videos[idx].title;
                  videos[idx].publishedAt = videoRenderer.publishedTimeText?.simpleText || videos[idx].publishedAt;
                  idx++;
                }
              }
            }
          }
        }
      } catch {
        // JSON parse failed, titles remain as defaults
      }
    }

    return videos.length > 0 ? videos : getStaticFallbackVideos();
  } catch {
    return getStaticFallbackVideos();
  }
}

function getStaticFallbackVideos(): YouTubeVideo[] {
  // Minimal fallback - directs users to the YouTube channel
  return [
    {
      id: 'channel',
      title: 'Visit our YouTube Channel for all messages',
      thumbnail: 'https://i.ytimg.com/vi/default/hqdefault.jpg',
      publishedAt: new Date().toISOString(),
      url: `https://www.youtube.com/${YOUTUBE_HANDLE}/videos`,
    },
  ];
}

function decodeXMLEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

export async function GET() {
  const videos = await fetchYouTubeVideos();
  return NextResponse.json({ videos, channelUrl: `https://www.youtube.com/${YOUTUBE_HANDLE}` });
}
