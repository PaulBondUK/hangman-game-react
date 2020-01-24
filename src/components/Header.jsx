import React from "react";

export default function Header(props) {
  const { checkWon, checkLose } = props;
  return <header className="hangman-header">HANGMAN</header>;
}
