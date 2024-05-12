import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-vX-latin-300.woff2') format('woff2');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-vX-latin-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-vX-latin-600.woff2') format('woff2');
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-size: 1rem;
      background-color: ${theme.colors.background};
      height: 100vh;
    }

    p,
    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
    }
  `}

  p {
    word-break: break-word;
  }
  
  button {
    cursor: pointer;
    border: none;
    background-color: initial;
  }

`;

export default GlobalStyles;
