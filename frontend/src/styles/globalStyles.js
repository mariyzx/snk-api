import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    overflow-x:hidden;
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    min-width: 100%;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    background-image: url('https://i.pinimg.com/originals/5e/95/f3/5e95f341dd28d5902503506e3f21ee8f.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: white;
}
`