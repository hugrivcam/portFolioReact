import { Navbar } from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Prosto_One } from 'next/font/google'


const prosto = Prosto_One({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Portfolio HugRiv',
  description: 'Portfolio animado',
}

export default function RootLayout({children,}: {children: React.ReactNode})
{
  return (
    <html lang="es">
      <body className={prosto.className}>
        {/* componentes */}
        <Navbar />
        {/*<Header />*/}
        {children}
      </body>
    </html>
  )
}
