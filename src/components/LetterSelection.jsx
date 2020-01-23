import React from "react";

export default function LetterSelection(props) {
  const { alphabet, toggleClickable } = props;
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
