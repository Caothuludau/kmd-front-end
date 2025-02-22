import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'product.hstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'theme.hstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fhan14-4.fna.fbcdn.net',
      },
    ],
  },
};

export default nextConfig;
