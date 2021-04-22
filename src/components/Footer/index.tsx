import React from "react";
import { StyledFooter } from "./StyledFooter";

function Footer() {
  return (
    <StyledFooter>
      <img
        src="https://naileditathome.com/assets/img/netflix-fever-logo-en-black.4167a994.svg"
        alt="FeverNetflix"
      />
      <div>
        <p>Made by <a href="https://github.com/martintoz">Martin Tozer</a> for Fever</p>
        <a href="https://docs.google.com/document/d/e/2PACX-1vTPrFsSuFD7Bp_bvXbcsJCZXFm0mlir_-d9jhGDsG1TKIxrz2FsQQs448GFuE-RyrzmIS7gmOJVC7mx/pub?embedded=true">
          Privacy Policy
        </a>
      </div>
    </StyledFooter>
  );
}

export default Footer;
