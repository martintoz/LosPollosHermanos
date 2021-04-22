import styled from "styled-components";
import { mainRed, mainYellow } from "../App/GlobalStyle";

export const StyledSubscribe = styled.div`
height:20vh;
padding:5vw;
  form {
    display: inline-block;
    padding:5px;
    border: 2px solid ${mainRed};
    background-color: ${mainYellow};
  }
`;
