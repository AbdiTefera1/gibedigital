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
  title: "Gibe Digital | Creative Tech Studio in Ethiopia | We Design, You Shine",
  description:
    "Gibe Digital is a full-service creative tech studio offering web development, medium-level software development, UI/UX design, IT consulting, digital marketing, and branding solutions for businesses and individuals.",
  keywords: [
    "Gibe Digital",
    "creative tech studio Ethiopia",
    "web development Ethiopia",
    "UI/UX design Ethiopia",
    "IT consulting Ethiopia",
    "software development Ethiopia",
    "digital marketing Ethiopia",
    "social media management",
    "branding and design",
    "Adama tech company",
    "Addis Ababa digital agency",
    "Ethiopia website development",
  ],
  icons: {
    icon: "/gibe.png",
  },

  openGraph: {
    title: "Gibe Digital | Creative Tech Studio | Web Development, UI/UX, IT Consulting",
    description:
      "Gibe Digital helps businesses shine with modern web development, UI/UX design, medium-level software development, IT consulting, and digital marketing services.",
    url: "https://gibedigital.com",
    siteName: "Gibe Digital",
    images: [
      {
        url: "/gibe.png",
        width: 1200,
        height: 630,
        alt: "Gibe Digital - Creative Tech Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gibe Digital | We Design, You Shine",
    description:
      "Gibe Digital provides professional web development, UI/UX design, IT consulting, software development, branding, and digital marketing solutions.",
    images: "/gibe.png",
    creator: "@gibedigital",
  },

  alternates: {
    canonical: "https://gibedigital.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
