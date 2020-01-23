import Header from "./components/Header";
import LetterSelection from "./components/LetterSelection";
import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    alphabet: [
      { letter: "a", clickable: true },
      { letter: "b", clickable: true },
      { letter: "c", clickable: true },
      { letter: "d", clickable: true },
      { letter: "e", clickable: true },
      { letter: "f", clickable: true },
      { letter: "g", clickable: true }
    ]
  };

  render() {
    return (
      <div>
        <Header />
        <LetterSelection
          alphabet={this.state.alphabet}
          toggleClickable={this.toggleClickable}
        />
      </div>
    );
  }

  toggleClickable = event => {
    console.log("clicked button");
  };
}
