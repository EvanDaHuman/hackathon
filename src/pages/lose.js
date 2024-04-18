import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Your CSS file for styling
import { useLocation } from 'react-router-dom';
function LosePage() {
    const location = useLocation();
  const { correctAnswer } = location.state;

  return (
    <div className="win-page">
      <h1 className="win-message">The correct movie was: {correctAnswer} <br/> Try Again Tommorow!</h1>
      <Link to="/" className="go-home-button">Go Home</Link>
    </div>
  );
}

export default LosePage;
