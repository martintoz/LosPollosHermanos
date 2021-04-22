import React from "react";
import { StyledAboutUs } from "./StyledAboutUs";

function AboutUs() {
  return (
    <StyledAboutUs id="aboutus">
        <div>
          <h2>About us</h2>
          Los Pollos Hermanos is a fast-growing casual family restaurant founded
          by Gus Fring and his business partner Max Arciniega. Together, the
          "chicken brothers" made a name for themselves and their small-town
          eatery by using authentic flavors and spices to make the tastiest
          chicken south of the border. Since then, Los Pollos Hermanos has
          opened our doors in the United States, serving families just like
          yours. And we look forward to continued growth!
        </div>
        <iframe className="ytEmbed"
          src="https://www.youtube.com/embed/VSXn5_opwIk?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    </StyledAboutUs>
  );
}

export default AboutUs;
