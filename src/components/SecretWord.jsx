import React from "react";

export default function SecretWord(props) {
  const { currentWord } = props;
  return (
    <div>
      <ul className="secret-word">
        {currentWord.map(letter => {
          if (letter.viewable === false) {
            return <li className="secret-word-letter">{"_"}</li>;
          } else return <li className="secret-word-letter">{letter.letter}</li>;
        })}
      </ul>
    </div>
  );
}
