import Header from "./components/Header";
import LetterSelection from "./components/LetterSelection";
import SecretWord from "./components/SecretWord";
import "./App.css";
import React, { Component } from "react";
const guessLimit = 1;
export default class App extends Component {
  state = {
    alphabet: [
      { letter: "A", clickable: true },
      { letter: "B", clickable: true },
      { letter: "C", clickable: true },
      { letter: "D", clickable: true },
      { letter: "E", clickable: true },
      { letter: "F", clickable: true },
      { letter: "G", clickable: true },
      { letter: "H", clickable: true },
      { letter: "I", clickable: true },
      { letter: "J", clickable: true },
      { letter: "K", clickable: true },
      { letter: "L", clickable: true },
      { letter: "M", clickable: true },
      { letter: "N", clickable: true },
      { letter: "O", clickable: true },
      { letter: "P", clickable: true },
      { letter: "Q", clickable: true },
      { letter: "R", clickable: true },
      { letter: "S", clickable: true },
      { letter: "T", clickable: true },
      { letter: "U", clickable: true },
      { letter: "V", clickable: true },
      { letter: "W", clickable: true },
      { letter: "X", clickable: true },
      { letter: "Y", clickable: true },
      { letter: "Z", clickable: true }
    ],
    currentWord: [
      { letter: "h", viewable: false },
      { letter: "e", viewable: false },
      { letter: "l", viewable: false },
      { letter: "l", viewable: false },
      { letter: "o", viewable: false }
    ],
    guessedLetters: 0,
    wrongGuesses: 0
  };

  render() {
    return (
      <div>
        <Header checkWon={this.checkWon} checkLose={this.checkLose} />
        <SecretWord currentWord={this.state.currentWord} />
        <LetterSelection
          alphabet={this.state.alphabet}
          toggleClickable={this.toggleClickable}
          checkLetterWord={this.checkLetterWord}
          checkWon={this.checkWon}
        />
      </div>
    );
  }

  toggleClickable = clickedIndex => {
    this.setState(currentState => {
      const updatedAlphabet = currentState.alphabet.map((letter, index) => {
        if (index === clickedIndex) {
          return { ...letter, clickable: false };
        } else return { ...letter };
      });
      return { alphabet: updatedAlphabet };
    });
  };

  checkLetterWord = valueLetter => {
    this.setState(currentState => {
      let guessLettersCount = 0;
      const checkedLetters = currentState.currentWord.map(letter => {
        if (letter.letter === valueLetter) {
          guessLettersCount++;
          return { ...letter, viewable: true };
        } else {
          return { ...letter };
        }
      });
      const newWrongGuesses = guessLettersCount === 0 ? 1 : 0;
      return {
        currentWord: checkedLetters,
        guessedLetters: currentState.guessedLetters + guessLettersCount,
        wrongGuesses: currentState.wrongGuesses + newWrongGuesses
      };
    });
  };

  checkWon = () => {
    return this.state.guessedLetters === this.state.currentWord.length;
  };
  checkLose = () => {
    return this.state.wrongGuesses === guessLimit;
  };
}
