import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ duration: 2000, error: { duration: 3000 } }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
