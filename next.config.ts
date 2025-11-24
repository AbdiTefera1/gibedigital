import type { NextConfig } from "next";

const nextConfig = {
  // Other config...
  turbopack: {
    resolveAlias: {
      '@': './',  // Map @/ to project root (adjust if your tsconfig baseUrl is ./src)
      '@/app': './app',  // Explicit for app/
    },
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],  // Add if missing
  "exclude": ["node_modules"],
};

export default nextConfig;
