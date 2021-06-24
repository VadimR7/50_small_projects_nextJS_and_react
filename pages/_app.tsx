/* eslint-disable react/jsx-props-no-spreading */
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  #__next {
  height: 100vh;
  min-height: fit-content;
}
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
