import styled from "styled-components";
import { navHeight, mainYellow, mainRed } from "../App/GlobalStyle";

export const StyledNav = styled.div`
  background-color: ${mainYellow};
  width: 100vw;
  min-height: ${navHeight}vh;
  border-bottom: 4px solid ${mainRed};
  position:fixed;

  z-index:99;
  nav {
    display: flex;
      ul{
    display: flex;}
  }
`;
