import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/styles/theme";
import createEmotionCache from "../lib/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";


export default class MyDocument extends Document {


    render() {
        const description = "This is the best guesthouse at Richards bay";
        const fontsUrl = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";
        return (
            <Html lang="en">
                <Head>
                    <meta content={theme.palette.primary.main} name="theme-color" />
                    <meta name="description" content={description} />
                    <link
                        rel="stylesheet"
                        href={fontsUrl}
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Plus+Jakarta+Sans:wght@700&display=swap" rel="stylesheet" />
                </Head>
                < body >
                    <Main />
                    < NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    // const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App: any) => (props) =>
            <App emotionCache={cache} {...props} />
    })

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTag = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ))
    return {
        ...initialProps,
        styles: [
            ...React.Children.toArray(initialProps.styles),
            ...emotionStyleTag
        ]
    }

}