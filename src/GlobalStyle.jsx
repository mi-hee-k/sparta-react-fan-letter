import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* reset CSS */

* {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input,
textarea {
  border: none;
}


button:focus,
button:active,
input:focus,
input:active,
textarea:focus,
textarea:active {
  outline: none;
}

ul,
ol,
li {
  list-style: none;
  padding-left: 0;
}

`;

export default GlobalStyle;
