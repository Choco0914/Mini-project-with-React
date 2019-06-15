import React, { Component } from "react";
import Home from "./components/Home";
import GlobalStyles from "./components/GolbalStyles";
import { IndActivist } from "./data";

class App extends Component {
  state = { selectedItem: 0, loaded: false };

  onSelectedItem = event => {
    this.setState({
      selectedItem: event.target.id,
      loaded: false
    });
  };

  onLoadedImg = () => {
    this.setState({
      loaded: true
    });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <>
        <Home
          loaded={this.state.loaded}
          onSelectedItem={this.onSelectedItem}
          indActivist={IndActivist}
          selectedItem={selectedItem}
          onLoadedImg={this.onLoadedImg}
        />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
