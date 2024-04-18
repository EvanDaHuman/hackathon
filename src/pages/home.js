import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="home-screen">
        <h1 className="header">Movie Mystery</h1>
        <p className="caption">Strengthen your film knowledge with movie trivia!</p>
        <Link to="game">
          <button className="home-btn">Start game</button>
        </Link>
        <Link to="stats">
          <button className="stats-btn">Start stats</button>
        </Link>
      </div>
    );
  };
  
  export default Home;