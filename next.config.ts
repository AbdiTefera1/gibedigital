import type { NextConfig } from "next";

const nextConfig = {
  // Other config...
  turbopack: {
    resolveAlias: {
      '@': './',  // Map @/ to project root (adjust if your tsconfig baseUrl is ./src)
      '@/app': './app',  // Explicit for app/
    },
  },
};

export default nextConfig;
