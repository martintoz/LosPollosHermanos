import React from "react";
import AboutUs from "../AboutUs";
import FeverBanner from "../FeverBanner";
import Header from "../Header";
import Nav from "../Nav";
import NewLocation from "../NewLocation";
import Promo from "../Promo";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Header />
      <FeverBanner />
      <NewLocation />
      <Promo />
      <AboutUs />
    </div>
  );
}

export default App;
