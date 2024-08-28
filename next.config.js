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
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '/mB4S7K2/**',
          },
        ],
      },
};

module.exports = nextConfig;
