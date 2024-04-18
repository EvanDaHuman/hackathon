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
  const [totalPoints, settotalPoints] = useState(0);
  return (
    <>
      <h1 className="points">Total Points: {totalPoints}</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/game/game1" element={<MovieDropDown />} />
          <Route path="/game2" element={<Game2 />} />
          <Route path="/game3" element={<Game3 />} />
          <Route path="/game4" element={<Game4 />} />
          <Route path="/game5" element={<Game5 />} />
          <Route path="/win" element={<WinPage />} />
          <Route path="/lose" element={<LosePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
