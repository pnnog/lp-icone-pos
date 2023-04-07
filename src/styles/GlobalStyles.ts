import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-display: swap;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/montserrat-v25-latin-regular.woff2') format('woff2')
}

@font-face {
  font-display: swap;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/montserrat-v25-latin-500.woff2') format('woff2')
}

@font-face {
  font-display: swap;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/montserrat-v25-latin-600.woff2') format('woff2')
}

@font-face {
  font-display: swap;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/montserrat-v25-latin-700.woff2') format('woff2')
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body{
  background-image: url('/img/background-image.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  ::before, ::after {
  }
}



${({ theme }) => css`
  html {
    font-size: 62.4%;
  }
  body {
    font-family: ${theme.font.family};
  }
`}




`;

export default GlobalStyle;
