import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Professional web designer in dubai - web developer uae - shafil ahmed</title>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BQ4MWTJ4RV" strategy="afterInteractive"></Script>
          <Script id="google-analytics" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
              
            gtag('config', 'G-BQ4MWTJ4RV');
            `}
          </Script>
      </Head>
      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />
      <Script src="http://code.jquery.com/jquery-1.11.0.min.js"></Script>
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script strategy="beforeInteractive" id="splitting" src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script id="isotope" strategy="beforeInteractive" src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
