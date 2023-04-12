import Head from "next/head";
import type { AppProps } from "next/app";

import { GlobalStyles } from "../src/styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="description" content="" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
