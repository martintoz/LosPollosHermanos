import styled from "styled-components";
import { navHeight, mainYellow, mainRed } from "../App/GlobalStyle";

export const StyledNav = styled.div`
  nav {
    background-color: ${mainYellow};
    width: 100vw;
    min-height: ${navHeight}vh;
    border-bottom: 4px solid ${mainRed};
    position: fixed;
    z-index: 99;
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:auto;
    align-items:center;
    ul {
      text-transform:uppercase;
      justify-self:end;
      margin-right:5vw;
      gap:2vw;
      display: flex;
    }
  }
`;
