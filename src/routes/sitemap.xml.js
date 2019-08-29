import * as api from '../helper/api.js';

const renderSitemap = (posts,pages,categories,generals) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${posts.map(post => `
  <url>
    <loc>https://juliengabryelewicz.fr/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`).join('\n')}
${pages.map(page => `
  <url>
    <loc>https://juliengabryelewicz.fr/${page.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
`).join('\n')}
${categories.map(category => `
  <url>
    <loc>https://juliengabryelewicz.fr/${category.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`).join('\n')}
${generals.map(general => `
  <url>
    <loc>https://juliengabryelewicz.fr/${general}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`).join('\n')}
</urlset>`;

export async function get(req, res) {

  res.writeHead(200, {
    'Cache-Control': `public, max-age=0, must-revalidate`,
    'Content-Type': 'application/xml'
  });

  const posts = await api.get(`articles?visible=1&_sort=created_at:DESC`);
  const pages = await api.get(`pages?visible=1&_sort=created_at:DESC`);
  const categories = await api.get(`categories?_sort=created_at:DESC`);
  const sitemapElement = renderSitemap(posts, pages, categories, ['', 'blog']);
  res.end(sitemapElement);
}
