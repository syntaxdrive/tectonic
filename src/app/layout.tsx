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
    default: "Tectonic | Websites, Business Tools & 3D Visualization Studio",
    template: "%s | Tectonic",
  },
  description:
    "Tectonic is a website, business tools, and 3D visualization studio based in Ibadan, Nigeria. We build professional websites, automation tools, and photorealistic Three.js renders of homes, products, and machines.",
  keywords: [
    "website design ibadan",
    "website design nigeria",
    "three.js 3d visualization nigeria",
    "architectural visualization nigeria",
    "photorealistic 3d render web",
    "business automation nigeria",
    "booking system nigeria",
    "next.js web studio ibadan",
    "product configurator three.js",
    "nigerian web design studio",
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
    title: "Tectonic | Websites, Business Tools & 3D Visualization Studio",
    description:
      "Professional websites, business automation tools, and photorealistic Three.js 3D visualizations — homes, products, and machines rendered in the browser. Based in Ibadan, Nigeria.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tectonic — Websites, Tools & 3D Visualization Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tectonic | Websites, Business Tools & 3D Visualization Studio",
    description:
      "Professional websites, business automation tools, and photorealistic Three.js 3D visualizations. Based in Ibadan, Nigeria.",
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
