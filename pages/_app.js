import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import PlausibleProvider from 'next-plausible'
import
 { Analytics } 
from
 
'@vercel/analytics/react'
;
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <PlausibleProvider domain="demo.vercel.im">
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Analytics/>
      </SessionProvider>
    </PlausibleProvider>
  )
}
