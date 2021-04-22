import styled from "styled-components";
import { headerHeight, lightYellow, navHeight } from "../App/GlobalStyle";

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
    grid-template-columns: 2fr 3fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: ". quote tasteTheFamily";
    justify-content: center;
    align-items: center;
    .tasteTheFamily {
      grid-area: tasteTheFamily;
      img {
        height: 10vw;
      }
      p {
        width: 80%;
        margin: auto;
      }
    }
    .quoteContainer {
      grid-area: quote;
    }
    .logo {
      display: none;
      width: 20vw;
      height: 20vw;
      place-self: center end;
    }
  }
  @media screen and (max-width: 1150px) {
    background: url("https://pbs.twimg.com/media/C9GXksjV0AE5LJI.jpg:large");
    background-position: 50%;
    background-size: cover;
    .mainContainer {
      grid-template-columns: 2fr 3fr;
      grid-template-areas: ". quote";
      .logo,
      .tasteTheFamily {
        display: none;
      }
    }
  }
  @media screen and (max-width: 750px) {
    background-position: 40%;
    .mainContainer {
      grid-template-columns: auto;
      grid-template-rows:2fr 3fr;
      grid-template-areas: ".""quote";
    }
  }
`;
