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
  return (
    <>
      <h1 className="points">Total Points: {totalPoints}</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/stats" element={<Stats />} />
          <Route
            path="/game/game1"
            element={
              <MovieDropDown
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
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
          <Route path="/game/game3" element={<Game3 totalPoints={totalPoints} setTotalPoints={setTotalPoints}/>} />
          <Route path="/game/game4" element={<Game4 totalPoints={totalPoints} setTotalPoints={setTotalPoints} />} />
          <Route path="/game/game5" element={<Game5 totalPoints={totalPoints} setTotalPoints={setTotalPoints} />} />
          <Route path="/win" element={<WinPage />} />
          <Route path="/lose" element={<LosePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
