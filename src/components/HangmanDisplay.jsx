import React from "react";
import hangman_0 from "../images/hangman_0.PNG";
import hangman_1 from "../images/hangman_1.PNG";
import hangman_2 from "../images/hangman_2.PNG";
import hangman_3 from "../images/hangman_3.PNG";
import hangman_4 from "../images/hangman_4.PNG";
import hangman_5 from "../images/hangman_5.PNG";

export default function HangmanDisplay(props) {
  const { wrongGuesses } = props;
  const hangmanImages = [
    hangman_0,
    hangman_1,
    hangman_2,
    hangman_3,
    hangman_4,
    hangman_5
  ];

  let winText;

  if (props.guessedLetters === props.currentWord.length) {
    winText = "YOU WIN!";
  } else if (props.wrongGuesses === 5) {
    winText = "YOU LOSE :-(";
  } else
    winText =
      5 - props.wrongGuesses === 1
        ? `1 GUESS REMAINING`
        : `${5 - props.wrongGuesses} GUESSES REMAINING`;
  return (
    <container className="hangman-display">
      <img className="hangman-image" src={hangmanImages[props.wrongGuesses]} />
      <h2 className="win-text">{winText}</h2>
    </container>
  );
}

// checkWon = () => {
//     return this.state.guessedLetters === this.state.currentWord.length;
//   };

//   checkLose = () => {
//     return this.state.wrongGuesses === guessLimit;
