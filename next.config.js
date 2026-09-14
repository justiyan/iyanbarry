/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: 'www.iyanbarry.com' }],
      destination: 'https://iyanbarry.com/:path*',
      permanent: true,
    }]
  },
}

module.exports = nextConfig