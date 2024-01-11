import { Inter } from 'next/font/google'
import './globals.css'
import Logo from './componants/Logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dino Book',
  description: 'social media app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Logo />
      </body>
    </html>
  )
}
