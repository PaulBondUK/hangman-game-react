import Header from "./components/Header";
import LetterSelection from "./components/LetterSelection";
import SecretWord from "./components/SecretWord";
import HangmanDisplay from "./components/HangmanDisplay";
import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import alphabet from "./components/Data";

export default class App extends Component {
  state = {
    alphabet: alphabet,
    currentWord: [
      { letter: "H", viewable: false },
      { letter: "E", viewable: false },
      { letter: "L", viewable: false },
      { letter: "L", viewable: false },
      { letter: "O", viewable: false }
    ],
    guessedLetters: 0,
    wrongGuesses: 0
  };

  render() {
    return (
      <div>
        <Header checkWon={this.checkWon} checkLose={this.checkLose} />
        <HangmanDisplay
          wrongGuesses={this.state.wrongGuesses}
          guessedLetters={this.state.guessedLetters}
          currentWord={this.state.currentWord}
        />
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
}
