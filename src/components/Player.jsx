import React from "react";

export default function Player() {
  const [playerName, setPlayerName] = React.useState('unknown entity');
  const inputRef = React.useRef();
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button onClick={() => setPlayerName(inputRef.current.value)}>Set Name</button>
      </p>
    </section>
  );
}
