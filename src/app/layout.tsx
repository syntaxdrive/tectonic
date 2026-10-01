import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tectonic-eight.vercel.app"),
  title: {
    default: "Tectonic | Software Studio & Venture Lab",
    template: "%s | Tectonic",
  },
  description:
    "Engineering institutional-grade web applications, distributed backend systems, and real-time 3D spatial software for enterprise scale and diaspora ventures.",
  keywords: [
    "software development studio",
    "institutional web engineering",
    "enterprise software ibadan",
    "enterprise software lagos",
    "ibadan software studio",
    "next.js full-stack systems",
    "three.js interactive spatial graphics",
    "nestjs distributed systems",
    "diaspora technology partner",
    "nearshore engineering team",
    "high-performance web applications",
  ],
  authors: [{ name: "Tectonic Studio", url: "https://tectonic-eight.vercel.app" }],
  creator: "Tectonic Studio",
  publisher: "Tectonic Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tectonic-eight.vercel.app",
    siteName: "Tectonic",
    title: "Tectonic | Software Studio & Venture Lab",
    description:
      "Engineering institutional-grade web applications, distributed backend systems, and real-time 3D spatial software for enterprise scale and diaspora ventures.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tectonic - Software Studio & Venture Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tectonic | Software Studio & Venture Lab",
    description:
      "Engineering institutional-grade web applications, distributed backend systems, and real-time 3D spatial software for enterprise scale and diaspora ventures.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/tectonic-logo.jpg",
    apple: "/tectonic-logo.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-950 font-sans">
        {children}
      </body>
    </html>
  );
}
