import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import GlobalStyle from '../styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>React Avançado - Boilerplate</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <meta
            name="description"
            content="A simples project starter to work with TypeScript, React, NextJS and Styled Components."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
