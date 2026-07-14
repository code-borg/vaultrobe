import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static pages via SSG (App Router). Deploy on Vercel for
  // optimized images + edge OG. For pure static HTML export, set:
  // output: "export" and images.unoptimized: true
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
