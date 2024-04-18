import { Link } from "react-router-dom";

const Stats = () => {
    return (
      
      <div className="stats-screen">
        <Link to="/">
          <button className = "backButton"> Back</button>
        </Link>
        <h1 className="header">Global Leaderboard</h1>
        <p>1. evandahuman: 5000 total points</p>
        <p>2. 900winne: 4850 total points</p>
        <p>3. ayman: 4700 total points</p>
        <p>4. flamingbison: 4650 total points</p>
        
        <h1 className="header">Personal Stats: evandahuman</h1>
        <p>Current Streak: 6 Days</p>
        <p>Longest Streak: 38 Days</p>
        <p>Highest Score: 47/50</p>
        <p>Total Points: 5000</p>

      </div>
    );
  };
  
  export default Stats;