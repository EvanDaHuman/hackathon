import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Your CSS file for styling

function WinPage() {
  return (
    <div className="win-page">
      <h1 className="win-message">You have won</h1>
      <Link to="/" className="go-home-button">Go Home</Link>
    </div>
  );
}

export default WinPage;
