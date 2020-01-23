import React from "react";

export default function Header(props) {
  const { checkWon, checkLose } = props;
  return (
    <header>{checkLose() ? <h1>You have lost</h1> : <h1>HangMan</h1>}</header>
  );
}
