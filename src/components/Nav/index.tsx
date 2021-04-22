import React from "react";
import { StyledNav } from "./StyledNav";
import { HashLink } from "react-router-hash-link";

function Nav() {
  const scrollWithOffset = (el: HTMLElement, responsive: boolean = false) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    let yOffset = -92;
    if (responsive) {
      yOffset = -61;
    }
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const handleMenu = () => {
    const menu = document.getElementById("responsiveMenu")!;
    if (menu.className === "menuResponsive") {
      menu.className += " menuResponsiveOn";
    } else {
      menu.className = "menuResponsive";
    }
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
        <ul className="menuList">
          <li>
            <HashLink to="/#news" scroll={(el) => scrollWithOffset(el)}>
              News
            </HashLink>
          </li>
          <li>
            <HashLink to="/#subscribe" scroll={(el) => scrollWithOffset(el)}>
              Subscribe
            </HashLink>
          </li>
          <li>
            <HashLink to="/#promo" scroll={(el) => scrollWithOffset(el)}>
              Promos
            </HashLink>
          </li>
          <li>
            <HashLink to="/#aboutus" scroll={(el) => scrollWithOffset(el)}>
              About us
            </HashLink>
          </li>
          <div className="menuIcon">
            <button className="icon" onClick={handleMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </ul>
      </nav>
      <div id="responsiveMenu" className="menuResponsive">
        <h2>Menu</h2>
        <ul>
          <li>
            <HashLink
              to="/#news"
              onClick={handleMenu}
              scroll={(el) => scrollWithOffset(el, true)}
            >
              News
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#subscribe"
              onClick={handleMenu}
              scroll={(el) => scrollWithOffset(el, true)}
            >
              Subscribe
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#promo"
              onClick={handleMenu}
              scroll={(el) => scrollWithOffset(el, true)}
            >
              Promos
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#aboutus"
              onClick={handleMenu}
              scroll={(el) => scrollWithOffset(el, true)}
            >
              About us
            </HashLink>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
}

export default Nav;
