import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Your CSS file for styling

function LosePage() {
  return (
    <div className="win-page">
      <h1 className="win-message">Nice Try. Try Again Tommorow!</h1>
      <Link to="/" className="go-home-button">Go Home</Link>
    </div>
  );
}

export default LosePage;
