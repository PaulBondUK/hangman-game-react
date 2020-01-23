import React from "react";

export default function LetterSelection(props) {
  const { alphabet, toggleClickable, checkLetterWord, checkWon } = props;
  return (
    <ul>
      {" "}
      {alphabet.map((letter, index) => {
        return (
          <li key={letter.letter}>
            {letter.clickable ? (
              <button
                onClick={() => {
                  toggleClickable(index);
                  checkLetterWord(letter.letter);
                }}
              >
                {letter.letter}
              </button>
            ) : (
              <button disabled>{letter.letter}</button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
