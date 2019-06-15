import React, { Component } from "react";
import Home from "./components/Home";
import GlobalStyles from "./components/GolbalStyles";
import { IndActivist } from "./data";

class App extends Component {
  state = { selectedItem: 0, loaded: false, clicked: true, selected: true };

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
  };
  onSelected = () => {
    if (this.state.selected) {
      this.setState({
        selected: false
      });
    } else {
      this.setState({
        selected: true
      });
    }
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
          onSelected={this.onSelected}
          selected={this.state.selected}
        />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
