import './globals.css'

export const metadata = {
  title: 'Samuraize.ai — Slice Through Any YouTube Video',
  description: 'AI-powered YouTube video summarizer. Get sharp, instant summaries of any video. Cut through the noise like a samurai.',
  keywords: 'youtube summarizer, AI video summary, samuraize, video clips, podcast summarizer',
  openGraph: {
    title: 'Samuraize.ai — Slice Through Any YouTube Video',
    description: 'AI-powered YouTube video summarizer. Sharp. Instant. Precise.',
    url: 'https://samuraize.ai',
    siteName: 'Samuraize.ai',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuraize.ai',
    description: 'Slice through any YouTube video with AI.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
