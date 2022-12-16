import '../styles/globals.css';

import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <title>Beast Hoods | a KID called BEAST</title>
      <meta name="title" content="Beast Hoods | a KID called BEAST" />
      <meta
        name="description"
        content="A Web3 Brand & Culture blurring the digital and physical experience. Our digital collectibles coming 15th January 2023."
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://beasthood.akidcalledbeast.com/"
      />
      <meta property="og:title" content="Beast Hoods | a KID called BEAST" />
      <meta
        property="og:description"
        content="A Web3 Brand & Culture blurring the digital and physical experience. Our digital collectibles coming 15th January 2023."
      />
      <meta
        property="og:image"
        content="https://beasthood.akidcalledbeast.com/social-share.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://beasthood.akidcalledbeast.com/"
      />
      <meta
        property="twitter:title"
        content="Beast Hoods | a KID called BEAST"
      />
      <meta
        property="twitter:description"
        content="A Web3 Brand & Culture blurring the digital and physical experience. Our digital collectibles coming 15th January 2023."
      />
      <meta
        property="twitter:image"
        content="https://beasthood.akidcalledbeast.com/social-share.png"
      />

      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.cdnfonts.com/css/swiss-721-3"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
