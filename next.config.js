/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Permite que o Next otimize os assets provenientes de um domínio específico (externo).
  images: {
    domains: [
      'files.stripe.com'
    ]
  }
}

module.exports = nextConfig
