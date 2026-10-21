import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ? site.origin : 'https://hatemypdf.com';

  const toolsSlugs = [
    // PDF Suite
    'compress-pdf', 'merge-pdf', 'split-pdf', 'pdf-to-word', 'pdf-to-images', 'protect-pdf',
    'unlock-pdf', 'rotate-pdf', 'organize-pdf', 'watermark-pdf', 'page-number-pdf', 'crop-pdf',
    'flatten-pdf', 'pdf-to-txt', 'images-to-pdf', 'pdf-to-excel', 'pdf-to-ppt', 'word-to-pdf',
    'excel-to-pdf', 'ppt-to-pdf', 'html-to-pdf', 'extract-pdf-images', 'remove-pdf-pages',
    'pdf-metadata-editor', 'pdf-grayscale',

    // Format Conversion
    'jpg-to-png', 'png-to-jpg', 'svg-to-png', 'webp-to-png', 'heic-to-jpg', 'png-to-webp',
    'resize-image', 'gif-to-mp4', 'ico-generator', 'crop-image', 'bmp-to-png', 'tiff-to-jpg',
    'svg-to-jpg', 'image-compressor', 'color-palette-extractor', 'webp-to-jpg', 'avif-to-png',
    'png-to-avif', 'eps-to-png', 'psd-to-png', 'markdown-to-pdf', 'json-to-xml', 'xml-to-json',
    'base64-to-image', 'image-to-base64',

    // Dev & Security
    'json-formatter', 'base64-decode', 'minify-css', 'jwt-inspector', 'diff-checker',
    'sql-formatter', 'regex-tester', 'hash-generator', 'uuid-generator', 'html-encoder',
    'url-encoder', 'js-beautifier', 'xml-formatter', 'cron-parser', 'curl-to-fetch',
    'bcrypt-hash', 'rsa-key-generator', 'hmac-generator', 'htpasswd-generator', 'escape-string',

    // Web & SEO
    'sitemap-generator', 'robots-txt-generator', 'open-graph-generator', 'meta-tag-analyzer', 'favicon-converter',

    // Math & Calculation
    'percentage-calculator', 'matrix-calculator', 'binary-calculator', 'random-number-generator', 'loan-calculator',

    // Audio & Video
    'audio-converter', 'audio-trimmer', 'video-compressor', 'video-to-gif', 'extract-audio',

    // Daily Tools
    'what-is-my-ip', 'password-generator', 'qr-code-generator', 'color-picker', 'px-to-rem',
    'unit-converter', 'timezone-converter', 'age-calculator', 'user-agent-parser', 'aspect-ratio-calculator',
    'barcode-generator', 'dns-lookup', 'whois-lookup', 'ssl-checker', 'internet-speed-test',

    // Text & Data
    'word-counter', 'markdown-to-html', 'csv-to-json', 'json-to-csv', 'lorem-generator',
    'case-converter', 'duplicate-line-remover', 'slug-generator', 'line-sorter', 'chmod-calculator',
  ];

  const mainPages = [
    '',
    '/tools',
    '/pdf',
    '/convert',
    '/dev',
    '/daily',
    '/about',
    '/blog',
    '/privacy',
    '/terms',
  ];

  const today = new Date().toISOString().split('T')[0];

  const urlsXml = [
    ...mainPages.map(
      (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${path === '' ? '1.0' : '0.9'}</priority>
    </url>`
    ),
    ...toolsSlugs.map(
      (slug) => `
    <url>
      <loc>${baseUrl}/tools/${slug}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.85</priority>
    </url>`
    ),
  ].join('');

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
