import React from "react";
import { StyledNewLocation } from "./StyledNewLocation";

function NewLocation() {
  return (
    <StyledNewLocation id="news">
      <div>
        <h2>We are landing in Spain!</h2>
        <p>
          A new Los Pollos Hermanos restaurant is opening soon at Puerta de
          Alcalá, Madrid.
        </p>
      </div>
      <a href="https://goo.gl/maps/8R56rkZRvj1bjcXZ7" target="_blank" rel="noreferrer">
        <i className="fas fa-map-marked-alt"></i>
      </a>
    </StyledNewLocation>
  );
}

export default NewLocation;
