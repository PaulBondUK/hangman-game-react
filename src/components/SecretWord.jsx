import React from "react";

export default function SecretWord(props) {
  const { currentWord } = props;
  return (
    <div>
      <ul>
        {currentWord.map( letter  => {
          if (letter.viewable === false) {
            return <li>{"_"}</li>;
          } else  return <li>{letter.letter}</li>;
        })}
      </ul>
    </div>
  );
}
