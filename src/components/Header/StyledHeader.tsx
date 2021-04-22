import styled from "styled-components";
import {
  headerHeight,
  lightYellow,
  navHeight,
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
