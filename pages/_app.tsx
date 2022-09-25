import type { AppProps } from 'next/app';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from '../src/styles/theme';
import createEmotionCache from '../lib/createEmotionCache';
import Head from 'next/head';
import TopHeader from '../hocs/TopHeader';
import AppBar from '../hocs/appbar';
import Script from 'next/script';

//Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}



const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GOOGLE_PUBLIC_ANALYTICS}`} />
      <Script strategy='lazyOnload'
        id="nqabanqaba-bukhosini"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_GOOGLE_PUBLIC_ANALYTICS});
        `}
      </Script>
      <CacheProvider value={emotionCache}>

        <Head>
          <title>Welcome to Nqabanqaba bnb</title>
          <meta name="viewport" content='initial-scale=1, width=device-width' />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TopHeader />
          <AppBar />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default App
