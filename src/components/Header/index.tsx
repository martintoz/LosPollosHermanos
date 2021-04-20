import React from "react";
import { StyledHeader } from "./StyledHeader";

function Header() {
  return (
    <StyledHeader>
      <p>
        "The finest ingredients are brought together with love and care, then
        slow cooked to perfection. Yes, the old ways are still best at Los
        Pollos Hermanos. But don't take my word for it. One taste, and you'll
        know."<br />
        -Gustavo "Gus" Fring
      </p>
      <img
        src="https://i.pinimg.com/originals/fa/76/ba/fa76bad19f70119ca8fe070e23698071.png"
        alt="logoLosPollos"
      />
    </StyledHeader>
  );
}

export default Header;
