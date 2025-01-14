/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig

