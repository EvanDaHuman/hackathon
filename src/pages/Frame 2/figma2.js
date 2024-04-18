import React from "react";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <img className="group" alt="Group" src="group-4.png" />
      <div className="overlap-group">
        <div className="rectangle" />
        <div className="ellipse" />
        <img className="polygon" alt="Polygon" src="polygon-2.svg" />
        <div className="div" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
      </div>
      <div className="overlap">
        <div className="ellipse-4" />
        <img className="img" alt="Group" src="group-1.png" />
        <img className="group-2" alt="Group" src="group-6.png" />
        <div className="rectangle-2" />
      </div>
      <img className="group-3" alt="Group" src="group-2.png" />
      <img className="group-4" alt="Group" src="group-5.png" />
      <div className="overlap-2">
        <img className="line" alt="Line" src="line-4.svg" />
        <img className="polygon-2" alt="Polygon" src="polygon-9.svg" />
        <img className="line-2" alt="Line" src="line-5.svg" />
      </div>
    </div>
  );
};
