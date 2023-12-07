/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
      return [
        // Rewrite rule for sitemap
        {
          source: "/sitemap.xml",
          destination: "/sitemap.xml.js",
        },
        // Additional rewrites...
      ];
    },
  };
  module.exports = nextConfig;
