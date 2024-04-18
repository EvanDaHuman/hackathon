import React from 'react';
import { Link } from 'react-router-dom';

const Stats = () => {
  return (
    <div className="stats-screen">
      <Link to="/">
        <button className="backButton"> Back</button>
      </Link>
      <h1 className="header">Global Leaderboard</h1>
      <div className="leaderboard">
        <div className="column rank">Rank</div>
        <div className="column username">Username</div>
        <div className="column total-points">Total Points</div>
        <p className="rank">1.</p>
        <p className="username">evandahuman</p>
        <p className="total-points">5000 total points</p>
        <p className="rank">2.</p>
        <p className="username">900winne</p>
        <p className="total-points">4850 total points</p>
        <p className="rank">3.</p>
        <p className="username">ayman</p>
        <p className="total-points">4700 total points</p>
        <p className="rank">4.</p>
        <p className="username">flamingbison</p>
        <p className="total-points">4650 total points</p>
      </div>
        <h1 className="header">Personal Stats: evandahuman</h1>
      <div className="leaderboard2">

        <p>Current Streak: 6 Days</p>
        <p>Longest Streak: 38 Days</p>
        <p>Highest Score: 47/50</p>
        <p>Total Points: 5000</p>
      </div>
    </div>
  );
};

export default Stats;
