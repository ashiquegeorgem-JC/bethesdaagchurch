async function testStreams() {
  const res = await fetch('https://www.youtube.com/@Bethesda_AG/streams', {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  });
  console.log('Streams tab status:', res.status);
  const html = await res.text();
  const match = html.match(/var ytInitialData = ({[\s\S]*?});<\/script>/) || html.match(/ytInitialData"\s*:\s*({[\s\S]*?})\s*;\s*</);
  if (match) {
    const ytData = JSON.parse(match[1]);
    const seen = new Set();
    const videos = [];
    function walk(obj) {
      if (!obj || typeof obj !== 'object') return;
      if (Array.isArray(obj)) {
        for (const item of obj) walk(item);
        return;
      }
      if (obj.lockupViewModel) {
        const lv = obj.lockupViewModel;
        let videoId = null;
        const thumbUrl = lv.contentImage?.thumbnailViewModel?.image?.sources?.[0]?.url;
        if (thumbUrl) {
          const m = thumbUrl.match(/\/vi\/([a-zA-Z0-9_-]{11})\//);
          if (m) videoId = m[1];
        }
        const title = lv.metadata?.lockupMetadataViewModel?.title?.content;
        let publishedAt = '';
        const metaRows = lv.metadata?.lockupMetadataViewModel?.metadata?.contentMetadataViewModel?.metadataRows;
        if (metaRows) {
          for (const row of metaRows) {
            for (const part of (row.metadataParts || [])) {
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
          videos.push({ videoId, title, publishedAt });
        }
      }
      for (const k of Object.keys(obj)) {
        if (k !== 'lockupViewModel') walk(obj[k]);
      }
    }
    walk(ytData);
    console.log(`Found ${videos.length} videos in STREAMS tab!`);
    videos.slice(0, 5).forEach((v, i) => console.log(`${i+1}. [${v.videoId}] ${v.title} (${v.publishedAt})`));
  }
}
testStreams();
