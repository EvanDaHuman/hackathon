import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'

const Game = () => {
    return (
      <div className="game-screen">
        <Link to="/">
          <button className = "backButton"> Back</button>
        </Link>
        <h1 className="header">Minigames</h1>
        <Link to="game1">
  <div className="button-container">
    <Button style={{backgroundImage:"url('./image2.png')",backgroundSize:"cover", width:"200px", height:"200px", borderRadius: "50%"}}></Button>
  </div>
  <p className="caption">Guess the movie based on frames</p>
</Link>

<Link to="game2">
  <div className="button-container">
    <Button style={{backgroundImage:"url('./image4.png')",backgroundSize:"cover", width:"200px", height:"200px", borderRadius: "50%"}}></Button>
  </div>
  <p className="caption">Guess the movie based on soundtrack</p>
</Link>

<Link to="game3">
  <div className="button-container">
    <Button style={{backgroundImage:"url('./image3.png')",backgroundSize:"cover", width:"200px", height:"200px", borderRadius: "50%"}}></Button>
  </div>
  <p className="caption">Guess the movie based on cast</p>
</Link>

<Link to="game4">
  <div className="button-container">
    <Button style={{backgroundImage:"url('./image5.png')",backgroundSize:"cover", width:"200px", height:"200px", borderRadius: "50%"}}></Button>
  </div>
  <p className="caption">Guess the movie based on quotes</p>
</Link>

<Link to="game5">
  <div className="button-container">
    <Button style={{backgroundImage:"url('./image6.png')",backgroundSize:"cover", width:"200px", height:"200px", borderRadius: "50%"}}></Button>
  </div>
  <p className="caption">Guess the movie based on objects</p>
</Link>

      </div>
    );
  };
  
  export default Game;