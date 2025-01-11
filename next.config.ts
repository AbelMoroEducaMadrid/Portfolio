/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/abelmoroeducamadrid.github.io/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/abelmoroeducamadrid.github.io' : '',
}

module.exports = nextConfig

