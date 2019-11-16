import React from "react";
import App from "next/app";
import Montserrat from "../assets/fonts/Montserrat/Montserrat-Regular.ttf";
import MontserratLight from "../assets/fonts/Montserrat/Montserrat-Light.ttf";
import MontserratBold from "../assets/fonts/Montserrat/Montserrat-Bold.ttf";
import MontserratSemiBold from "../assets/fonts/Montserrat/Montserrat-SemiBold.ttf";
import MontserratMedium from "../assets/fonts/Montserrat/Montserrat-Medium.ttf";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat}) format('opentype');
    }
    @font-face {
        font-family: 'MontserratLight';
        src: url(${MontserratLight}) format('opentype');
    }
    @font-face {
        font-family: 'MontserratBold';
        src: url(${MontserratBold}) format('opentype');
    }
    @font-face {
        font-family: 'MontserratSemiBold';
        src: url(${MontserratSemiBold}) format('opentype');
    }
     @font-face {
        font-family: 'MontserratMedium';
        src: url(${MontserratMedium}) format('opentype');
    }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div style={{ margin: "auto", maxWidth: 430 }}>
        <Component {...pageProps} />
        <GlobalStyles />
      </div>
    );
  }
}

export default MyApp;
