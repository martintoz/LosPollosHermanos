import React from "react";
import { StyledAboutUs } from "./StyledAboutUs";

function AboutUs() {
  return (
    <StyledAboutUs>
      <div className="youtube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VSXn5_opwIk?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      </div>
    </StyledAboutUs>
  );
}

export default AboutUs;
