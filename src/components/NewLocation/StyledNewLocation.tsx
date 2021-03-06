import styled from "styled-components";
import { white, black, mainYellow } from "../App/GlobalStyle";

export const StyledNewLocation = styled.div`
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 35%, black 95%),
    url("https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/madrid/puerta-alcala-c-turismo-madrid.jpg_604889389.jpg");
  background-position: 50% 70%;
  background-repeat: no-repeat;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  color: ${white};
  padding: 5vw;
  p {
    text-shadow: 2px 2px ${black};
  }
  .fas {
    font-size: 5rem;
  }
  h2{
    span{
      color:${mainYellow}
    }
  }
  @media screen and (max-width: 750px) {
    background: linear-gradient(to top, rgba(255, 255, 255, 0) 35%, black 95%),
    url("https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/madrid/puerta-alcala-c-turismo-madrid.jpg_604889389.jpg");
    background-position: 40% 80%;
    align-items: center;
    .fas {
      font-size: 3rem;
    }
  }
`;
