import React from "react";
import FeverBanner from "../FeverBanner";
import Header from "../Header";
import Nav from "../Nav";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Header />
      <FeverBanner />
    </div>
  );
}

export default App;
