import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps}) {
  let {session, ...pagePropsRest} = pageProps;
  return (
    <SessionProvider session={session} >
      <Component {...pagePropsRest} />
    </SessionProvider>
  );
}

export default MyApp
