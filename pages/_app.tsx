import '../styles/globals.css'
import type { AppProps } from 'next/app'

import MainLayout from "../components/mainlayout";

function MyApp({ Component, pageProps }: AppProps) {
  pageProps.title = "Super-App.com";
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
