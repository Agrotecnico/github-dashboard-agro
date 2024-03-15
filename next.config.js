/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'localhost',
            port: '3000',
            pathname: '/public/**',
          },
        ],
      },
};

module.exports = nextConfig;
