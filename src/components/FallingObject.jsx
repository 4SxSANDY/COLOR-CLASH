import React from "react";
import "./FallingObject.css";

const FallingObject = ({ color, position }) => {
  const handleDragStart = (e) => {
    console.log("Dragging started:", color); // Debugging log
    e.dataTransfer.setData("color", color);
    e.dataTransfer.effectAllowed = "move"; // Ensure dragging works
  };

  
  return (
    <div
      className="falling-object"
      style={{ backgroundColor: color, left: position }}
      draggable="true"
      onDragStart={handleDragStart}
    />
  );
};

export default FallingObject;
