import React, { useState, useEffect } from "react";
import FallingObject from "./FallingObject";
import Scoreboard from "./Scoreboard";
import "./Container.css";


const Container = () => {
  const [fallingObjects, setFallingObjects] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    return localStorage.getItem("highScore") || 0;
  });

  // score storing in local storage 
  useEffect(() => {
    if (lives === 0) {
      setGameOver(true);
      if (score > highScore) {
        localStorage.setItem("highScore", score);
        setHighScore(score);
      }
    }
  }, [lives, score, highScore]);

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        setFallingObjects((prev) => [
          ...prev,
          { id: Math.random(), color: getRandomColor(), position: `${Math.random() * 90}%` },
        ]);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [gameOver]);

  function getRandomColor() {
    const colors = ["red", "blue", "green"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const handleDrop = (e, color) => {
    e.preventDefault();
    const droppedColor = e.dataTransfer.getData("color");

    if (droppedColor === color) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setLives((prevLives) => prevLives - 1);
    }

    setFallingObjects((prevObjects) => prevObjects.filter((obj) => obj.color !== droppedColor));
  };

  const handleDragOver = (e) => e.preventDefault();

  const restartGame = () => {
    setScore(0);
    setLives(5);
    setGameOver(false);
    setFallingObjects([]);
  };

  return (
    <div className="game-container">
      <Scoreboard score={score} lives={lives} highScore={highScore} />
      {gameOver ? (
        <div className="popup">
          <h2>Game Over!</h2>
          <p>High Score: {highScore}</p>
          <p>Your Score: {score}</p>
          <button onClick={restartGame}>Restart</button>
        </div>
      ) : (
        <>
          <div className="falling-area">
            {fallingObjects.map((obj) => (
              <FallingObject key={obj.id} color={obj.color} position={obj.position} />
            ))}
          </div>
          <div className="buckets">
            <div className="bucket red" onDrop={(e) => handleDrop(e, "red")} onDragOver={handleDragOver}>Red</div>
            <div className="bucket blue" onDrop={(e) => handleDrop(e, "blue")} onDragOver={handleDragOver}>Blue</div>
            <div className="bucket green" onDrop={(e) => handleDrop(e, "green")} onDragOver={handleDragOver}>Green</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Container;
