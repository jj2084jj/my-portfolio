
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.notion.com",
        pathname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${process.env.NEXT_PUBLIC_NOTION_API_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

