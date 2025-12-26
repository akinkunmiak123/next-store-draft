import { hostname } from "os"

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'cmdqnfdnbydnwephoxoi.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: '19mb', // <--- limit defined here
      // allowedOrigins: ['my-proxy.com', '*.my-proxy.com'] // optional
    },
  },
}

export default nextConfig
