import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const [totalPoints, settotalPoints] = useState(0);

function App() {
  return (
    <>
    <div className = "point-display">
      
    </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path = "/stats" element = {<Stats />} />
          <Route path = "/game/game1" element = {<MovieDropDown />} />
          <Route path = "/game/game2" element = {<Game2 />} />
          <Route path = "/game/game3" element = {<Game3 />} />
          <Route path = "/game/game4" element = {<Game4 />} />
          <Route path = "/game/game5" element = {<Game5 />} />
          <Route path = "/win" element = {<WinPage/>} />
          <Route path = "/lose" element = {<LosePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;