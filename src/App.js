import React, { Component } from "react";
import Home from "./components/Home";
import GlobalStyles from "./components/GolbalStyles";
import { IndActivist } from "./data";

class App extends Component {
  state = { selectedItem: 0 };

  onSelectedItem = event => {
    console.log(event.target.id);
  };

  render() {
    return (
      <>
        <Home onSelectedItem={this.onSelectedItem} indActivist={IndActivist} />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
