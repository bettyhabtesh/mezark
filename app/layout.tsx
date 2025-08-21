import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "MezArk - Architectural Excellence | Innovative Design & Construction",
  description: "Discover MezArk's innovative architectural design, sustainable construction, and visionary spaces. Transforming ideas into architectural masterpieces in Ethiopia and beyond.",
  keywords: [
    "architecture", "design", "construction", "Ethiopia", "MezArk", "sustainable", "modern architecture", "visionary spaces", "collaborative excellence"
  ],
  openGraph: {
    title: "MezArk - Architectural Excellence",
    description: "Innovative architectural design and construction services by MezArk.",
    url: "https://mezark.vercel.app/",
    siteName: "MezArk",
    images: [
      {
        url: "/black-architect-team-modern-office.png",
        width: 1200,
        height: 630,
        alt: "MezArk - Architectural Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MezArk - Architectural Excellence",
    description: "Innovative architectural design and construction services by MezArk.",
    images: ["/black-architect-team-modern-office.png"],
    creator: "@mezkerem_ark"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
