import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  turbopack: {
    resolveAlias: {
      '@': './',  // Map @/ to project root (adjust if your tsconfig baseUrl is ./src)
      '@/app': './app',  // Explicit for app/
    },
  },
};

export default nextConfig;
