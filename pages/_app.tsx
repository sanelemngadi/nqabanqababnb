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
import { PageContext } from '../src/context';
import FaqsModal from '../src/components/templates/faqsDrawer/FaqModal';

import "../src/components/imagesCollegeSwipper/styles.css"
// import Footer from '../hocs/footer';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../hocs/footer'));

//Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}


// <meta name="author" content="Mfaniseni Bukhosini">
const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=G-283WECMC8C`} />
      <Script strategy='lazyOnload'
        id="nqabanqaba-bukhosini"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-283WECMC8C');
        `}
      </Script>
      <CacheProvider value={emotionCache}>

        <Head>
          <title>Welcome to Nqabanqaba bnb</title>
          <meta name="viewport" content='initial-scale=1, width=device-width' />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PageContext>
            <>
              <FaqsModal />
              <TopHeader />
              <AppBar />
              <Component {...pageProps} />
              <Footer />
            </>
          </PageContext>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default App
