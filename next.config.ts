/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
<<<<<<< HEAD
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn4.vectorstock.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'c8.alamy.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
      {
        protocol: 'https',
        hostname: 'motionarray.imgix.net',
      },
    ],
=======
    domains: ["via.placeholder.com","cdn4.vectorstock.com","media.istockphoto.com","images.pexels.com","i.pinimg.com","c8.alamy.com","th.bing.com","motionarray.imgix.net","www.shutterstock.com",], // allow the placeholder domain
>>>>>>> ff494e5 (Updated TutorDashboard)
  },
}

module.exports = nextConfig

