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
  title: "Gibe Digital | We Design, You Shine",
  description: "Gibe Digital is a creative tech studio that blends design and technology to help businesses shine. We offer branding, web development, UI/UX, social media management, video editing, and digital marketing services.",
  icons: {
    icon: "/gibe.png",
  },
  openGraph: {
    images: "/gibe.png",
    title: "Gibe Digital | We Design, You Shine",
    description: "Gibe Digital is a creative tech studio that blends design and technology to help businesses shine. We offer branding, web development, UI/UX, social media management, video editing, and digital marketing services.",
    url: "https://gibe.digital",
    siteName: "Gibe Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gibe Digital | We Design, You Shine",
    description: "Gibe Digital is a creative tech studio that blends design and technology to help businesses shine. We offer branding, web development, UI/UX, social media management, video editing, and digital marketing services.",
    images: "/gibe.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
