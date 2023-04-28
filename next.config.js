/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.360buyimg.com",
      },
      {
        protocol: "https",
        hostname: "*.doubanio.com",
      },
    ],
  },
}

module.exports = nextConfig
