import React from "react";
import Quote from "../Quote";
import { StyledHeader } from "./StyledHeader";

function Header() {
  return (
    <StyledHeader id="header">
      <div className="mainContainer">
        <div className="tasteTheFamily">
          <img
            src="https://user-images.githubusercontent.com/74660801/115553523-ca2e3580-a2ad-11eb-94b6-67a4f9aff148.png"
            alt="tasteTheFamily"
          />
          <p>Chicken so fresh you will always come back for more.</p>
        </div>
        <div className="quoteContainer">
          <Quote
            quotationMarks={true}
            text="The finest ingredients are brought together with love and care, then
          slow cooked to perfection. Yes, the old ways are still best at Los
          Pollos Hermanos. But don't take my word for it. One taste, and you'll
          know."
            author={`Gustavo "Gus" Fring - Owner`}
          />
        </div>
        <img
          className="logo"
          src="https://i.pinimg.com/originals/fa/76/ba/fa76bad19f70119ca8fe070e23698071.png"
          alt="logoLosPollos"
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
