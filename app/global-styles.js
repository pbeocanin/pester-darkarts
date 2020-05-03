import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100vw;
  }
  body {
	font-family: 'Nunito', sans-serif;
  	font-style: normal;
  	font-weight: 400;
  	background: #F0F6F9;
    height: 100%;
    width: 100%;

  }
  ::selection {
    background: #5738FF;
	color: #fff;
  }
  ::-moz-selection {
    background: #5738FF;
	color: #fff;
  }
`;
export default GlobalStyle;
