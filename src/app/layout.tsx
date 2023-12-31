
import { Header } from '@/components'
import { CartProvider } from '@/contexts'
import GraphQlProvider from '@/contexts/apolloProvider'
import { Saira } from 'next/font/google'
import './globals.css'
const saira = Saira({ subsets: ['latin'] })

export const metadata = {
  title: 'Capputeeno',
  description: 'Capputeeno store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GraphQlProvider>
        <body
          className={`${saira.className} text-dark`}
          suppressHydrationWarning={true}
        >
          <CartProvider>
            <Header />

            <main className="py-8 container mx-auto px-4">{children}</main>
          </CartProvider>
        </body>
      </GraphQlProvider>
    </html>
  )
}
