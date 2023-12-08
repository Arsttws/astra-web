/** @type {import('next').NextConfig} */
const nextConfig = {}

require('dotenv').config()

module.exports = nextConfig
// module.exports = {
//     env: {
//         MAIN_URL: process.env.MAIN_URL
//     }
// }
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
        },
      ],
    },
  }