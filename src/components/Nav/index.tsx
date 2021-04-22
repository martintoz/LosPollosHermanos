import React from "react";
import { StyledNav } from "./StyledNav";
import { HashLink } from "react-router-hash-link";

function Nav() {
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -92;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <StyledNav>
      <nav>
        <HashLink to="/#header" scroll={(el) => scrollWithOffset(el)}>
          <img
          className="banner"
            src="https://user-images.githubusercontent.com/74660801/115701899-92d08f00-a368-11eb-93bc-6e02970795f5.png"
            alt="bannerLosPollos"
          />
        </HashLink>
        <ul>
          <li>
            <HashLink to="/#news" scroll={(el) => scrollWithOffset(el)}>
              News
            </HashLink>
          </li>
          <li>
            <HashLink to="/#promo" scroll={(el) => scrollWithOffset(el)}>
              Promos
            </HashLink>
          </li>
          <li>
            <HashLink to="/#subscribe" scroll={(el) => scrollWithOffset(el)}>
              Subscribe
            </HashLink>
          </li>
          <li>
            <HashLink to="/#aboutus" scroll={(el) => scrollWithOffset(el)}>
              About us
            </HashLink>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
}

export default Nav;
