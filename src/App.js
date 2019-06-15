import React, { Component } from "react";
import Home from "./components/Home";
import GlobalStyles from "./components/GolbalStyles";
import { IndActivist } from "./data";

class App extends Component {
  state = { selectedItem: 0, loaded: false, clicked: false };

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

  onClicked = () => {
    if (this.state.clicked) {
      this.setState({ clicked: false });
    } else {
      this.setState({ clicked: true });
    }
    console.log(this.state.clicked);
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
          onClicked={this.onClicked}
          clicked={this.state.clicked}
        />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
