import { Inter } from 'next/font/google'
import './globals.css'
import Logo from './componants/Logo'
import NavBar from './componants/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tick Talk',
  description: 'social media app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Logo />
      </body>
    </html>
  )
}
