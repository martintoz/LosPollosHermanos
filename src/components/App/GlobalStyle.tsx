import { createGlobalStyle } from "styled-components";

export const navHeight = 10;
export const bannerHeight = 15;
export const headerHeight = 100 - navHeight - bannerHeight;
export const mainYellow = "#fddb00";
export const lightYellow = "#ffff53";
export const darkYellow = "#c5aa00";
export const mainRed = "#d2102a";
export const darkRed = "#980001";
export const lightBlue = "#6aace6";
export const mainBlue = "#27437c";
export const white = "#F0F0F0";
export const black = "#151515";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  
}
body{
  overflow-x: hidden;
  background-color:${lightYellow};
  font-family: 'Open Sans', sans-serif;
}
h1, h2, h3, h4, h5, h6{
  font-family: 'Luckiest Guy', cursive;
  letter-spacing:3px;
  padding:5px 0;
  color: ${mainRed};
}
h2{
  font-size: 3em;
}
a{
  text-decoration:none;
  color:${mainRed};
  &:hover{
    color:${darkRed};
    transition: all 300ms ease;
  }
}
ul{
    list-style: none;

    padding-inline-start:0;
}

@media screen and (max-width: 750px) {
    h2{
      font-size:2em;
    }
  }
`;
