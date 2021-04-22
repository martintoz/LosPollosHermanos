import styled from "styled-components";
import { black, white } from "../App/GlobalStyle";

export const StyledPromo = styled.div`
  background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 35%,
      black 95%
    ), url("https://dude.it/statics/img/works/47_Netflix/EVENT/2.jpg");
background-repeat:no-repeat;
background-position:50% 90%;
background-size:cover;
height:60vh;
display:flex;
align-items:center;
justify-content:space-between;
color:${white};
padding:5vw;
p{
    text-shadow: 2px 2px ${black};
}
.fas{
    font-size:5rem;
}
`;
