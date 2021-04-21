import React from "react";
import { StyledSubscribe } from "./StyledSubscribe";

function Subscribe() {
  return (
    <StyledSubscribe id="subscribe">
      <h2>Subscribe to our newsletter</h2>
      <form>
        <input type="text" placeholder="email@address.com"></input>
        <button type="submit">Submit</button>
      </form>
    </StyledSubscribe>
  );
}

export default Subscribe;
