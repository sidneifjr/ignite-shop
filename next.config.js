/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Necessário para que o Next possa realizar o processo de otimização dos assets provenientes de um domínio específico.
  images: {
    domains: [
      'files.stripe.com'
    ]
  }
}

module.exports = nextConfig
