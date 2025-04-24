import { createGlobalStyle } from "styled-components"
import TheQualified from "../fonts/TheQualified-Regular.otf"
import Thrillers from "../fonts/Thrillers-Regular.otf"
import IBMPlexSans from "../fonts/IBMPlexSans-Regular.ttf"
import CourierPrime from "../fonts/CourierPrime-Regular.ttf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TheQualified';
    src: url(${TheQualified}) format('opentype');
  }

  @font-face {
    font-family: 'Thrillers';
    src: url(${Thrillers}) format('opentype');
  }

  @font-face {
    font-family: 'IBMPlexSans';
    src: url(${IBMPlexSans}) format('truetype');
  }

  @font-face {
    font-family: 'CourierPrime';
    src: url(${CourierPrime}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    background: #000;
    color: #fff;
    font-family: 'IBMPlexSans', sans-serif;
  }
`

export default GlobalStyle
