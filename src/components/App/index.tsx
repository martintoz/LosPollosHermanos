import React from "react";
import AboutUs from "../AboutUs";
import Footer from "../Footer";
import Header from "../Header";
import Nav from "../Nav";
import NewLocation from "../NewLocation";
import Promo from "../Promo";
import Subscribe from "../Subscribe";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Header />
      <NewLocation /> 
      <Subscribe />
      <Promo />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
