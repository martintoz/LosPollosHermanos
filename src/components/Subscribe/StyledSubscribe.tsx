import styled from "styled-components";
import {
  lightBlue,
  mainBlue,
  mainRed,
  mainYellow,
  white,
} from "../App/GlobalStyle";

export const StyledSubscribe = styled.div`
  min-height: 20vh;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  form {
    margin-top: 3vh;
    display: flex;
    flex-direction: column;
    width: 25%;
    gap: 1vw;
    padding: 2vw;
    border: 2px solid ${mainRed};
    background-color: ${mainYellow};
    border-radius: 3px;
    button {
      width: 50%;
      align-self: center;
      border: 2px solid ${mainBlue};
      background-color: ${lightBlue};
      color: ${white};
      border-radius: 3px;
        height:5vh;
      &:disabled {
        opacity: 0.65;
        cursor: not-allowed;
      }
      &:hover:enabled {
        transform: scale(1.1);
        transition: all 300ms ease;
      }
    }
  }
  @media screen and (max-width: 750px) {
    form {
      width: 80%;
    }
  }
`;
