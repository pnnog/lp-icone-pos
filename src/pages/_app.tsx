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
          <title>ícone Pós</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <meta
            name="description"
            content="A Ícone Pós-graduação traz cursos de especialização e atualização em Implantodontia."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
