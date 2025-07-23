import './globals.css'
import '../styles/product.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Wella Professional',
    template: '%s - Wella Professional'
  },
  description: 'Site oficial de ingredientes Wella Professional.',
  icons: {
    icon: '/wella.ico'
  },
  openGraph: {
    title: 'Wella Professional',
    description: 'Descubra os produtos e ingredientes da Wella Professional.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: 'Wella Ingredientes',
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wella Professional',
    description: 'Descubra os produtos e ingredientes da Wella Professional.'
  }
}

function AppLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}

export default AppLayout
