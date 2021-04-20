import { createGlobalStyle } from "styled-components";

export const navHeight = 10;
export const mainYellow = "#fddb00"
export const lightYellow = "#ffff53"
export const darkYellow = "#c5aa00"
export const mainRed = "#d2102a"
export const lightBlue = "#6aace6"
export const mainBlue = "#27437c"

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
}
body{
  background-color:${lightYellow};
}
ul{
    list-style: none;
}
`;
