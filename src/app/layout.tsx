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
  title: "Tectonic NG | Full-Stack Software Studio & Venture Lab",
  description:
    "We engineer high-performance web, mobile, and interactive 3D software for Nigerian SMEs, Diaspora Founders, and Global Tech Outsourcing teams. Powered by Next.js, Three.js, NestJS, and PostgreSQL.",
  keywords: [
    "software development nigeria",
    "lagos tech studio",
    "next.js developers nigeria",
    "three.js interactive web",
    "nestjs backend developers",
    "diaspora tech partner",
    "nearshore software outsourcing lagos",
  ],
  authors: [{ name: "Tectonic NG Technologies" }],
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
