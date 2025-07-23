/** @type{import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pro.sistemawca.com.br',
        port: '',
        pathname: '/wp-content/uploads/**'
      },
      {
        protocol: 'https',
        hostname: 'retail.sistemawca.com.br',
        port: '',
        pathname: '/wp-content/uploads/**'
      }
    ]
  }
}

export default config
