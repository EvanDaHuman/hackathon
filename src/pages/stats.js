import { Link } from "react-router-dom";

const Stats = () => {
    return (
      
      <div className="stats-screen">
        <Link to="/">
          <button className = "backButton"> Back</button>
        </Link>
        <h1 className="header">Global Leaderboard</h1>
        <p>1. Evan Wang: 5000 total points</p>
        <p>2. Estar Guan: 4850 total points</p>
        <p>3. Aydan Ling: 4700 total points</p>
        <p>4. Marcus Yu: 4650 total points</p>
        
        <h1 className="header">Personal Stats: Evan Wang</h1>
        <p>Current Streak: 6 Days</p>
        <p>Longest Streak: 25 Days</p>
        <p>Highest Score: 47/50</p>
        <p>Total Points: 1272</p>

      </div>
    );
  };
  
  export default Stats;