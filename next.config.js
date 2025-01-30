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
  
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application
          source: "/:path*",
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'index,follow',
            },
          ],
        },
        // Additional headers...
      ];
    },
  };
  
  module.exports = nextConfig;