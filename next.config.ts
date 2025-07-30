/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.notion.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
