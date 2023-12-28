import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import "../../public/scss/styles.global.scss"

import Header from './component/header'
import Footer from './component/footer'
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-7X2YPE0DKN" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-7X2YPE0DKN');
        `}
      </Script>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}
