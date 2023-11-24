import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import "../../public/scss/styles.global.scss"

import Header from './component/header'
import Footer from './component/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}
