import styled from "styled-components";
import { bannerHeight, mainYellow, mainRed } from "../App/GlobalStyle";

export const StyledFooter = styled.div`
  background-color: ${mainYellow};
  border-top: 4px solid ${mainRed};
  min-height: ${bannerHeight}vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:50px;
  img {
      width:20%;
      padding-top:2vh;
      min-width:15rem;
  }
  div{
    text-align:center;
    p{
      font-size:1em;
      a{
      font-size:1em;
    }}
    a{
      font-size:0.8em;
    }
  }
`;
