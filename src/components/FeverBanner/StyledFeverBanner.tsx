import styled from "styled-components";
import { bannerHeight, lightBlue } from "../App/GlobalStyle";

export const StyledFeverBanner = styled.div`
  background-color: ${lightBlue};
  height: ${bannerHeight}vh;
  width:100vw;
  display:flex;
  justify-content:center;
  img {
      width:20vw;
  }
`;
