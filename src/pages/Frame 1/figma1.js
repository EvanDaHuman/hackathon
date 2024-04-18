import React from "react";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="text-wrapper">Movie Mystery</div>
      <p className="div">Strengthen your film knowledge with movie trivia!</p>
      <div className="overlap">
        <div className="text-wrapper-2">Play Game</div>
      </div>
      <div className="overlap-group">
        <div className="text-wrapper-3">Leaderboard</div>
      </div>
      <img className="film-reel-icon" alt="Film reel icon" src="film-reel-icon-2048x2048-57vi5wn8-1.png" />
      <div className="overlap-group-2">
        <div className="ellipse" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        <div className="ellipse-4" />
        <div className="ellipse-5" />
      </div>
      <div className="overlap-2">
        <div className="rectangle" />
        <div className="ellipse-6" />
        <div className="ellipse-7" />
        <img className="polygon" alt="Polygon" src="polygon-1.svg" />
        <div className="ellipse-8" />
        <div className="ellipse-9" />
      </div>
    </div>
  );
};
