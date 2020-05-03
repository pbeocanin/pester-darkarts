import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100vw;
  }
  body {

  	background: #EDEDED;
    height: 100%;
    width: 100%;

  }
  ::selection {
    background: #205199;
	color: #fff;
  }
  ::-moz-selection {
    background: #205199;
	color: #fff;
  }
`;
export default GlobalStyle;
