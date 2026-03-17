import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/cgi-bin/',
        ],
      },
    ],
    sitemap: 'https://zirka.solutions/sitemap.xml',
  };
}
