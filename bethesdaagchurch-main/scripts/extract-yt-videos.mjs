// Script to extract video IDs and titles from ytData.json
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ytData = JSON.parse(readFileSync(join(__dirname, '../ytData.json'), 'utf8'));

const seen = new Set();
const videos = [];

function walk(obj) {
  if (!obj || typeof obj !== 'object') return;
  
  if (Array.isArray(obj)) {
    for (const item of obj) walk(item);
    return;
  }
  
  // Look for lockupViewModel which is how YouTube's innertube API returns videos
  if (obj.lockupViewModel) {
    const lv = obj.lockupViewModel;
    // Get video ID from the watch URL in onTap or from thumbnail URL
    let videoId = null;
    
    // Try to find videoId from thumbnail URL
    const thumbUrl = lv.contentImage?.thumbnailViewModel?.image?.sources?.[0]?.url;
    if (thumbUrl) {
      const match = thumbUrl.match(/\/vi\/([a-zA-Z0-9_-]{11})\//);
      if (match) videoId = match[1];
    }
    
    // Also try from animatedThumbnail
    if (!videoId) {
      const animThumb = lv.contentImage?.thumbnailViewModel?.overlays?.find(
        (o) => o.animatedThumbnailOverlayViewModel
      );
      const animUrl = animThumb?.animatedThumbnailOverlayViewModel?.thumbnail?.sources?.[0]?.url;
      if (animUrl) {
        const match = animUrl.match(/\/([a-zA-Z0-9_-]{11})\//);
        if (match) videoId = match[1];
      }
    }
    
    // Also check animationActivationTargetId on badge
    if (!videoId) {
      const badges = lv.contentImage?.thumbnailViewModel?.overlays?.[0]?.thumbnailBottomOverlayViewModel?.badges;
      if (badges?.[0]?.thumbnailBadgeViewModel?.animationActivationTargetId) {
        videoId = badges[0].thumbnailBadgeViewModel.animationActivationTargetId;
      }
    }
    
    // Get title
    const title = lv.metadata?.lockupMetadataViewModel?.title?.content;
    
    // Get published date from metadata rows
    const metaRows = lv.metadata?.lockupMetadataViewModel?.metadata?.contentMetadataViewModel?.metadataRows;
    let publishedAt = '';
    if (metaRows) {
      for (const row of metaRows) {
        for (const part of (row.metadataParts || [])) {
          const text = part.text?.content || '';
          if (text.includes('ago') || text.includes('year') || text.includes('month') || text.includes('week') || text.includes('day')) {
            publishedAt = text;
          }
        }
      }
    }
    
    if (videoId && title && !seen.has(videoId)) {
      seen.add(videoId);
      videos.push({ id: videoId, title, publishedAt });
    }
  }
  
  for (const key of Object.keys(obj)) {
    if (key !== 'lockupViewModel') walk(obj[key]);
  }
}

walk(ytData);

console.log(`Found ${videos.length} videos`);
videos.slice(0, 20).forEach((v, i) => {
  console.log(`${i + 1}. [${v.id}] ${v.title.substring(0, 70)} (${v.publishedAt})`);
});

// Write to a static file
const output = videos.map((v) => ({
  id: v.id,
  title: v.title,
  thumbnail: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
  publishedAt: v.publishedAt,
  url: `https://www.youtube.com/watch?v=${v.id}`,
  embedUrl: `https://www.youtube.com/embed/${v.id}`,
}));

writeFileSync(
  join(__dirname, '../src/lib/static-yt-videos.json'),
  JSON.stringify(output, null, 2),
  'utf8'
);

console.log(`\nWritten ${output.length} videos to src/lib/static-yt-videos.json`);
