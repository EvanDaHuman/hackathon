import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import Game from "./pages/game";
import Stats from "./pages/stats";
import MovieDropDown from "./pages/game1";
import Game2 from "./pages/game2";
import Game3 from "./pages/game3";
import Game4 from "./pages/game4";
import Game5 from "./pages/game5";
import WinPage from "./pages/win";
import LosePage from "./pages/lose";

function App() {
  const [totalPoints, setTotalPoints] = useState(0);

  // Initialize the variables with the values from localStorage or false if not present
  const [game1Played, setGame1Played] = useState(
    localStorage.getItem("game1Played") === "false"
  );
  const [game2Played, setGame2Played] = useState(
    localStorage.getItem("game2Played") === "false"
  );
  const [game3Played, setGame3Played] = useState(
    localStorage.getItem("game3Played") === "false"
  );
  const [game4Played, setGame4Played] = useState(
    localStorage.getItem("game4Played") === "false"
  );
  const [game5Played, setGame5Played] = useState(
    localStorage.getItem("game5Played") === "false"
  );
  return (
    <>
      <h1 className="points">Total Points: {totalPoints}</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/game"
            element={
              <Game
                game1={game1Played}
                game2={game2Played}
                game3={game3Played}
                game4={game4Played}
                game5={game5Played}
              />
            }
          />

          <Route path="/stats" element={<Stats />} />
          <Route
            path="/game/game1"
            element={
              <MovieDropDown
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
                game1Played={game1Played}
                setGame1Played={setGame1Played}
              />
            }
          />
          <Route
            path="/game/game2"
            element={
              <Game2
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
              />
            }
          />
          <Route
            path="/game/game3"
            element={
              <Game3
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
              />
            }
          />
          <Route path="/game/game4" element={<Game4 />} />
          <Route path="/game/game5" element={<Game5 />} />
          <Route path="/win" element={<WinPage />} />
          <Route path="/lose" element={<LosePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
