import React, { Component } from "react";
import Home from "./components/Home";
import GlobalStyles from "./components/GolbalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Home />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
