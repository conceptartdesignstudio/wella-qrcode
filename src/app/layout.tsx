import './globals.css'
import '../styles/product.css'

import type { Metadata } from 'next'
import PageWrapper from './PageWrapper'

export const metadata: Metadata = {
  title: {
    default: `${process.env.NEXT_PUBLIC_WELLA_NAME}`,
    template: `%s - ${process.env.NEXT_PUBLIC_WELLA_NAME}`
  },
  description: `Site oficial de ingredientes ${process.env.NEXT_PUBLIC_WELLA_NAME}.`,
  icons: {
    icon: '/wella.ico'
  },
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_WELLA_NAME}`,
    description: `Descubra os produtos e ingredientes da ${process.env.NEXT_PUBLIC_WELLA_NAME}.`,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: 'Wella Ingredientes',
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_WELLA_NAME}`,
    description: `Descubra os produtos e ingredientes da ${process.env.NEXT_PUBLIC_WELLA_NAME}.`
  }
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  )
}

export default AppLayout
