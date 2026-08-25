import { writeFileSync } from 'fs';

async function test() {
  const res = await fetch('https://www.youtube.com/@Bethesda_AG', {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    },
  });
  const html = await res.text();
  
  const match1 = html.match(/channel_id=([a-zA-Z0-9_-]+)/);
  const match2 = html.match(/"channelId":"([a-zA-Z0-9_-]+)"/);
  const match3 = html.match(/browseId":"(UC[a-zA-Z0-9_-]+)"/);
  
  console.log('Match 1 (channel_id):', match1?.[1]);
  console.log('Match 2 (channelId):', match2?.[1]);
  console.log('Match 3 (browseId):', match3?.[1]);
  
  const channelId = match3?.[1] || match2?.[1] || match1?.[1];
  if (channelId) {
    const rssRes = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
    console.log('RSS Status:', rssRes.status);
    const xml = await rssRes.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    console.log('RSS Entries count:', entries.length);
    if (entries.length > 0) {
      const firstTitle = entries[0][1].match(/<title>([^<]+)<\/title>/)?.[1];
      console.log('First video title:', firstTitle);
    }
  }
}

test();
