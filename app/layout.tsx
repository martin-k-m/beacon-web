import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://beacon.blinkdev.me'),
  title: 'Beacon — understand any GitHub repository instantly',
  description:
    'Beacon is an open-source GitHub repository intelligence platform. It turns repository health, activity, contributors, and trends into a clear health score and actionable insights — with a CLI, REST API, and dashboard. MIT licensed and self-hostable.',
  keywords: [
    'github analytics',
    'repository health',
    'repository intelligence',
    'open source',
    'developer tools',
    'contributor analytics',
    'code health score',
  ],
  authors: [{ name: 'Beacon' }],
  alternates: {
    canonical: 'https://beacon.blinkdev.me',
  },
  openGraph: {
    title: 'Beacon — understand any GitHub repository instantly',
    description:
      'Open-source repository intelligence: health scores, contributor analytics, timelines, language breakdowns, and AI summaries. CLI, REST API, and dashboard. MIT licensed.',
    url: 'https://beacon.blinkdev.me',
    siteName: 'Beacon',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#070A0F',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
