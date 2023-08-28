import '@/styles/globals.scss';
import { SessionProvider } from "next-auth/react";
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import type { AppProps } from "next/app"
import type { Session } from "next-auth"
export default function App({
  Component ,
  pageProps: { session, ...pageProps },
}:AppProps<{session:Session}>) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}
