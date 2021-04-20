import styled from "styled-components";
import { headerHeight, navHeight } from "../App/GlobalStyle";

export const StyledHeader = styled.div`
  margin-top: ${navHeight}vh;
  height: ${headerHeight}vh;
  div {
      padding:5vw;
    display: flex;
    img {
      width: 25vw;
      height: 25vw;
    }
  }
`;
