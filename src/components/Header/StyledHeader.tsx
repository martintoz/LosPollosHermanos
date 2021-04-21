import styled from "styled-components";
import {
  darkRed,
  headerHeight,
  lightBlue,
  lightYellow,
  mainBlue,
  mainYellow,
  navHeight,
  white,
} from "../App/GlobalStyle";

export const StyledHeader = styled.div`
  padding-top: ${navHeight}vh;
  height: ${headerHeight}vh;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 35%,
      ${lightYellow} 45%
    ),
    url("https://pbs.twimg.com/media/C9GXksjV0AE5LJI.jpg:large");
  background-repeat: no-repeat;
  background-position: -15%;
  background-size: contain;
  display: flex;
  .mainContainer {
    overflow-x: visible;
    justify-self: center;
    padding: 5vw;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "tasteTheFamily quote logo";
    .tasteTheFamily {
      height: 10vw;
      grid-area: tasteTheFamily;
    }
    .logo {
      width: 20vw;
      height: 20vw;
      grid-area: logo;
      place-self: center end;
    }
    .quote {
      overflow-x: visible;
      position: relative;
      border: 5px solid ${mainBlue};
      background-color: ${lightBlue};
      color: ${white};
      padding: 2vw;
      margin:2vw;
      grid-area: quote;
      place-self: center center;
      font-family: "Playfair Display", serif;
      font-style: italic;
      font-size: 1.5rem;
      span {
        font-style: normal;
        color: ${mainYellow};
      }
      .openQuote,
      .closeQuote {
        color: ${darkRed};
        font-size: 10rem;
        font-weight: bold;
        position: absolute;
        line-height:0.1;
        margin:0;
        padding:0;
      }
      .openQuote {
        top: 15px;
        left:-50px;
      }
      .closeQuote{
        bottom:-35px;
        right:-15px;
      }
    }
  }
  @media screen and (max-width: 1150px) {
    background: url("https://pbs.twimg.com/media/C9GXksjV0AE5LJI.jpg:large");
    background-position: 50%;
    div {
      grid-template-areas: ". quote .";
      .logo,
      .tasteTheFamily {
        display: none;
      }
    }
  }
`;
