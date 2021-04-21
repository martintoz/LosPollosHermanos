import React from "react";
import { StyledNav } from "./StyledNav";
import { HashLink } from 'react-router-hash-link';

function Nav() {
  const scrollWithOffset = (el: HTMLElement) => {
    console.log("el", el, typeof el)
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -92; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return (
    <StyledNav>
      <nav>
      <HashLink to="/#header" scroll={el => scrollWithOffset(el)}>Los Pollos Hermanos</HashLink>
          <ul>
            <li><HashLink to="/#news" scroll={el => scrollWithOffset(el)}>News</HashLink></li>
            <li><HashLink to="/#promo" scroll={el => scrollWithOffset(el)}>Promos</HashLink></li>
            <li><HashLink to="/#subscribe" scroll={el => scrollWithOffset(el)}>Subscribe</HashLink></li>
            <li><HashLink to="/#aboutus" scroll={el => scrollWithOffset(el)}>About us</HashLink></li>
          </ul>
      </nav>
    </StyledNav>
  );
}

export default Nav;
