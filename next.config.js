/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '54.94.46.47',
        port: '3000',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
