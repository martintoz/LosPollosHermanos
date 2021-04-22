import React from "react";
import Countdown from "../Countdown";
import { StyledPromo } from "./StyledPromo";

function Promo() {
  return (
    <StyledPromo id="promo">
      <div>
        <h2>Free Drink!</h2>
        <p>Order any Los Pollos menu and your drink is on us.</p>
      </div>
      <Countdown date="May 5, 2021 00:00:00" />
    </StyledPromo>
  );
}

export default Promo;
