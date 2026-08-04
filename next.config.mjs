/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/ae',
        destination: 'https://myskytravel-com.vercel.app/ae',
      },
      {
        source: '/ae/:path*',
        destination: 'https://myskytravel-com.vercel.app/ae/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
