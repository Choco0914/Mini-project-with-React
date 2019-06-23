import React, { Component } from "react";
import Home from "./components/Home";
import GlobalStyles from "./components/GolbalStyles";
import { IndActivist } from "./data";
import Store from "./components/store";

class App extends Component {
  constructor(props) {
    super(props);

    this.onSelectedItem = event => {
      this.setState({
        selectedItem: event.target.id,
        loaded: false
      });
    };

    this.onLoadedImg = () => {
      if (!this.state.loaded) {
        this.setState({
          loaded: true
        });
      }
    };

    this.onClicked = () => {
      if (this.state.clicked) {
        this.setState({ clicked: false });
      } else {
        this.setState({ clicked: true });
      }
    };

    this.onSelected = () => {
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

    this.state = {
      selectedItem: 0,
      loaded: false,
      clicked: true,
      selected: true,
      indActivist: IndActivist,
      onSelectedItem: this.onSelectedItem,
      onLoadedImg: this.onLoadedImg,
      onClicked: this.onClicked,
      onSelected: this.onSelected
    };
  }

  render() {
    return (
      <Store.Provider value={this.state}>
        <Home />
        <GlobalStyles />
      </Store.Provider>
    );
  }
}

export default App;
