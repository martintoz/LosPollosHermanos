import styled from "styled-components";

export const StyledAboutUs = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items:center;

  .ytEmbed {
    width: 50vw;
    height: 28vw;
  }
  div {
    padding: 5vw;
  }
  @media screen and (max-width: 750px) {
    grid-template-rows: 3fr 2fr;
    grid-template-columns: auto;
    .ytEmbed {
    width: 100vw;
    height: 56vw;
  }
  }
`;
