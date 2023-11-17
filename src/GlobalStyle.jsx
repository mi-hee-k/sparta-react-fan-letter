import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* reset CSS */

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  position: relative;
  height:100%;
}

#root {
  height:100%;
}

body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg,  #0f0d0e 60%, #2c0001);
  z-index: -2; /* 그라데이션 레이어의 z-index를 설정합니다. */
}

body::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmghDz%2Fbtq106dFmaE%2FYdSWWUAYSJ7KEWntD84vY1%2Fimg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  z-index: -1; /* 이미지 레이어의 z-index를 설정합니다. */
}

main {
  padding: 20px;
  height: 100%;
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
