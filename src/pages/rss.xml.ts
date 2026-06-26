// src/pages/rss.xml.ts
import { siteConfig } from '../utils/siteConfig';

export async function GET() {
  let items = '';
  try {
    const resp = await fetch(`${siteConfig.url}/blog/index.json`);
    const posts = await resp.json();
    items = posts.map((post: any) => `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${siteConfig.url}/blog/${post.slug}/</link>
        <description>${escapeXml(post.description || '')}</description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <guid>${siteConfig.url}/blog/${post.slug}/</guid>
      </item>
    `).join('');
  } catch {}

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.title)}</title>
    <link>${siteConfig.url}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>zh-CN</language>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
