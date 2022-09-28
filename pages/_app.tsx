import { useState, useEffect } from 'react';
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

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Loading from '../src/components/organisms/loading';

const Footer = dynamic(() => import('../hocs/footer'));

//Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}


// <meta name="author" content="Mfaniseni Bukhosini">
const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

    return () => {
      setLoading(true);
    }
  }, []);

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
          <meta name="keywords" content="Guesthouse, Guest house, Best Guesthouse in Richards Bay, Best BnB in Meerensee, meer en see, rooms to let" />
          <meta name="robots" content="all" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PageContext>
            {loading ? <Loading /> :
              <>
                <FaqsModal />
                {router.pathname !== '/sucess' && router.pathname !== "/404" && <TopHeader />}
                {router.pathname !== '/sucess' && router.pathname !== "/404" && <AppBar />}
                <Component {...pageProps} />
                {router.pathname !== '/sucess' && router.pathname !== "/404" && <Footer />}
              </>
            }
          </PageContext>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default App
