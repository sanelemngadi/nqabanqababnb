import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import TopHeader from '../hocs/TopHeader';
import AppBar from '../hocs/appbar';
import Script from 'next/script';

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Loading from '../src/components/organisms/loading';

import '@fontsource/cormorant/700.css';
import '@fontsource/cormorant/400.css';
import '@fontsource/dosis/400.css';
import '@fontsource/dosis/500.css';
import NqabaPageLayout from '../src/layout';


// plus-jakarta-sans


const Footer = dynamic(() => import(/* webpackChunkName: 'footer' */ '../hocs/footer'));

//Client-side cache, shared for the whole session of the user in the browser
// const clientSideEmotionCache = createEmotionCache();

// interface MyAppProps extends AppProps {
//   emotionCache?: EmotionCache
// }


const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    const handleError = () => setErr(true);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);
  }, [router]);

  // const costs = [1, 2, 3, 4, 5];

  // const total = useMemo(() =>
  //   costs.reduce((a, c) => a + c, 0)
  //   , [costs]);

  // console.log("total: ", total);



  return (
    <>

      {/* <CacheProvider value={emotionCache}> */}

      <Head>
        <title>Welcome to Nqabanqaba bnb</title>
        <meta name="viewport" content='initial-scale=1, width=device-width' />
        <meta name="keywords" content="Guesthouse, Guest house, Best Guesthouse in Richards Bay, Best BnB in Meerensee, meer en see, rooms to let" />
        <meta name="robots" content="all" />
        {/* <link rel="canonical" href={`https://nqabanqaba.netlify.app${router.pathname}`}></link> */}
        <meta name="author" content="Mfaniseni Bukhosini" />
      </Head>
      {/* <ThemeProvider theme={theme}>
          <CssBaseline /> */}
      <NqabaPageLayout>
        <>
          {loading && <Loading />}

          {router.pathname !== '/sucess' && router.pathname !== "/404" && <TopHeader />}
          {router.pathname !== '/sucess' && router.pathname !== "/404" && <AppBar />}
          <Component {...pageProps} />
          {router.pathname !== '/sucess' && router.pathname !== "/404" && <Footer />}
        </>
      </NqabaPageLayout>


      {/* <>{renderComponent()}</> */}
      {/* </ThemeProvider> */}
      {/* </CacheProvider> */}
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=G-283WECMC8C`} />
      <Script strategy='afterInteractive'
        id="nqabanqaba-bukhosini"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-283WECMC8C');
          `}
      </Script>
    </>
  )
}

export default App
