import { createGlobalStyle } from 'styled-components';

import '@fortawesome/fontawesome-free/css/all.css';

const GlobalStyle = createGlobalStyle`
  *{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    height: 100%;
  }
`;

export default GlobalStyle;
