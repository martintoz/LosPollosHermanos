import styled from "styled-components";
import {  darkRed, lightBlue, mainBlue,  mainYellow, white } from "../App/GlobalStyle";

export const StyledQuote = styled.div`
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
        .openQuote,
      .closeQuote{
        font-size:6rem;
      }
      }
    }
    @media screen and (max-width: 750px) {
      .quote{

      font-size: 1.2rem;
      }
  }
`;
