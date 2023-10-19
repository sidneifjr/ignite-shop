/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  skipWaiting: true,
  register: true,
  disable: process.env.NODE_ENV === 'development'
})

const nextConfig = {
  reactStrictMode: true,

  // Permite que o Next otimize os assets provenientes de um domínio específico (externo).
  images: {
    domains: [
      'files.stripe.com'
    ]
  }
}

module.exports = withPWA(nextConfig)
