import styled from "styled-components";
import { navHeight, mainYellow, mainRed } from "../App/GlobalStyle";
export const StyledNav = styled.div`
  nav {
    background-color: ${mainYellow};
    width: 100vw;
    min-height: ${navHeight}vh;
    border-bottom: 4px solid ${mainRed};
    position: fixed;
    z-index: 99;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    align-items: center;
    ul {
      text-transform: uppercase;
      justify-self: end;
      margin-right: 5vw;
      gap: 2vw;
      display: flex;
      a:hover {
        text-decoration: underline;
      }
      .menuIcon, .menuResponsive {
        display: none;
      }
    }
    .banner {
      padding-left: 2vw;
      width: 70%;
    }
  }
  @media screen and (max-width: 750px) {
    nav {
      grid-template-columns: 3fr 1fr;
      ul {
        li{
        display:none;}
        .menuIcon {
          display: block;
          .icon {
            border: none;
            background-color: transparent;
            font-size:2em;
          }
        }
      }
    }
  }
        .menuResponsive{
          display:none;
          height: 100vh;
          width: 70vw;
          background-color:${mainYellow};
          position: fixed;
          right:-70vw;
          z-index:98;
          transition: all 300ms ease;
          backdrop-filter: blur(3px);
          padding-top:${navHeight}vh;
          h2{
            padding:5vh 0 2vh 2vh;
          }
          ul{
            width:100%;
            display:flex;
            flex-direction:column;
            align-items:center;
            li{
              width:80%;
              font-size:1.5rem;
            }
          }
        }
        .menuResponsiveOn{
          display:flex;
          flex-direction:column;
          /* background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 30%, ${mainYellow} 30%); */
          right:0;
          /* width: 100vw; */
          transition: all 300ms ease;
        }
`;
