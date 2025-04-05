import React, { useState } from "react";
import Home from "./components/Home";
import InstructionsModal from "./components/InstructionsModal";
import Container from "./components/Container";
import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div>
      {!gameStarted ? (
        <Home
          onStartGame={() => setGameStarted(true)}
          onShowInstructions={() => setShowInstructions(true)}
        />
      ) : (
        <Container />
      )}

      {showInstructions && (
        <InstructionsModal onClose={() => setShowInstructions(false)} />
      )}
    </div>
  );
}

export default App;
