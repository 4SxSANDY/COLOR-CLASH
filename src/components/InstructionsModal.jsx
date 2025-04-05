import React from "react";
import "./InstructionsModal.css";


const InstructionsModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>How to Play</h2>
        <p> Color Match Drop 🟥🟦🟩. Colored objects fall from the top, and the player must catch them in matching containers. Uses drag-and-drop mechanics and real-time sorting logic. Click on falling objects to earn points.</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InstructionsModal;