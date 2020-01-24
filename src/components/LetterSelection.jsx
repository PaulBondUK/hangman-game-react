import React from "react";
import Button from "react-bootstrap/Button";

export default function LetterSelection(props) {
  const { alphabet, toggleClickable, checkLetterWord, checkWon } = props;
  return (
    <ul className="letter-selection">
      {" "}
      {alphabet.map((letter, index) => {
        return (
          <li key={letter.letter}>
            {letter.clickable ? (
              <Button
                className="letter-button"
                variant="dark"
                onClick={() => {
                  toggleClickable(index);
                  checkLetterWord(letter.letter);
                }}
              >
                {letter.letter}
              </Button>
            ) : (
              <Button className="letter-button" variant="dark" disabled>
                {letter.letter}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
