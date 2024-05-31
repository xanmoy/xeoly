/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['upload.wikimedia.org', 'www.w3.org', 'www.google.com'],
  },
};

module.exports = nextConfig;
