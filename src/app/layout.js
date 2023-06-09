
import './globals.css'
import { Inter } from 'next/font/google'
import ProviderSession from '@/components/Provider'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Youth-Led Social Entreprenuership',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, session }) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={inter.className}>
        <ProviderSession session={session}>
          <Navbar />
          <main className='min-h-screen'>{children}</main>
          <Footer />
        </ProviderSession>
      </body>
    </html>
  )
}
