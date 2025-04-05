import React from "react";
import "./Home.css";

const Home = ({ onStartGame, onShowInstructions }) => {
  return (
    <div className="home-container">
      <h1 className="home-title">Color Clash</h1>
      <div className="button-container">
        <button className="home-button" onClick={onStartGame}>Start Game</button>
        <button className="home-button" onClick={onShowInstructions}>How To Play?</button>
      </div>
    </div>
  );
};


export default Home;