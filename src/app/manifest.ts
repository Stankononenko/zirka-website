import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zirka Solutions',
    short_name: 'Zirka',
    description: "Calgary's growth & operations partner. Marketing, SEO, AI automation, web development, and recruiting under one roof.",
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1120',
    theme_color: '#2563EB',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
