import type { APIRoute } from 'astro';

const rutas = ['/', '/marca'];

export const GET: APIRoute = ({ site }) => {
  const hoy = new Date().toISOString().slice(0, 10);
  const urls = rutas
    .map((r) => `  <url><loc>${new URL(r, site).href}</loc><lastmod>${hoy}</lastmod></url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
