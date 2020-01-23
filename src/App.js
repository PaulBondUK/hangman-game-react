import Header from "./components/Header";
import LetterSelection from "./components/LetterSelection";
import SecretWord from "./components/SecretWord";
import "./App.css";
import React, { Component } from "react";
const guessLimit = 1;
export default class App extends Component {
  state = {
    alphabet: [
      { letter: "h", clickable: true },
      { letter: "e", clickable: true },
      { letter: "l", clickable: true },
      { letter: "o", clickable: true },
      { letter: "f", clickable: true },
      { letter: "g", clickable: true }
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
        <Header checkWon={this.checkWon} checkLose={this.checkLose}/>
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
