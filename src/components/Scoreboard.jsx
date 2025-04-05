import React from "react";
import "./Scoreboard.css";

const Scoreboard = ({ score, lives }) => {
  return (
    <div className="scoreboard">
      <h2>Score: {score}</h2>
      <div className="lives">
        {Array.from({ length: lives }).map((_, index) => (
          <span key={index} className="heart">❤️</span>
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;
