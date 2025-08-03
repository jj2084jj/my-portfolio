/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'notion.so',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img.notionusercontent.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
