import React, { Component } from "react";
import Home from "./components/Home";
import GlobalStyles from "./components/GolbalStyles";
import { IndActivist } from "./data";

class App extends Component {
  render() {
    return (
      <>
        <Home indActivist={IndActivist} />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
