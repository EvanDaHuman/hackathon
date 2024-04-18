import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";

import movies from "../components/MovieList.js";
// import totalPoints from  "./App.js";

function Game3({ totalPoints, setTotalPoints }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputText, setInputText] = useState("");
  const correctMovie = "Dune 2";
  const navigate = useNavigate();
  const [frameNum, setFrameNum] = useState(1);

  let difficultyArray = ["Impossible", "Very Hard", "Hard", "Medium", "Easy"];

  let imageArray = [
    <img src="/cast1.jpg" width="400" height="500" />,
    <img src="/cast2.jpg" width="400" height="500" />,
    <img src="/cast3.jpg" width="350" height="500" />,
    <img src="/cast4.jpg" width="400" height="500" />,
    <img src="/cast5.jpg" width="400" height="500" />,
  ];

  function filterMovies(event) {
    setInputText(event.target.value);
    const query = event.target.value.toLowerCase();
    const filtered = movies.filter((movie) =>
      movie.toLowerCase().startsWith(query)
    );
    setFilteredMovies(filtered);
    setShowDropdown(query.length > 0);
  }

  function selectMovie(movie) {
    setShowDropdown(false);
    checkMovie(movie);
  }

  function checkMovie(movie) {
    if (movie === correctMovie) {
      if (frameNum === 1) {
        setTotalPoints(totalPoints + 10);
      } else if (frameNum === 2) {
        setTotalPoints(totalPoints + 7);
      } else if (frameNum === 3){
        setTotalPoints(totalPoints + 5);
      } else if (frameNum === 4){
        setTotalPoints(totalPoints + 3);
      } else {
        setTotalPoints(totalPoints + 1);
      }
      navigate("/win");
    } else {
      console.log("Incorrect. Try again.");
      setFrameNum(frameNum + 1);

      if (frameNum >= 5) {
        console.log("ran");
        setFrameNum(1);
        navigate("/lose");
      }
    }
  }

  return (
    <div className="movie-dropdown">
      <Link to="/game">
        <button className="backButton"> Back</button>
      </Link>
      <h1 className="title">Guess the movie by the cast</h1>
      <h2 className="subtitle">
        Actor/Actress {frameNum}: {difficultyArray[frameNum - 1]}
      </h2>
      {imageArray[frameNum - 1]}
      <input
        className="text-box"
        type="text"
        placeholder="Search for movie..."
        onChange={filterMovies}
      />
      {showDropdown && (
        <div className="dropdown-content">
          <div className="column">
            {filteredMovies
              .slice(0, Math.ceil(filteredMovies.length / 3))
              .map((movie) => (
                <button
                  className="movie-button"
                  key={movie}
                  onClick={() => selectMovie(movie)}
                >
                  {movie}
                </button>
              ))}
          </div>
          <div className="column">
            {filteredMovies
              .slice(
                Math.ceil(filteredMovies.length / 3),
                Math.ceil(filteredMovies.length / 3) * 2
              )
              .map((movie) => (
                <button
                  className="movie-button"
                  key={movie}
                  onClick={() => selectMovie(movie)}
                >
                  {movie}
                </button>
              ))}
          </div>
          <div className="column">
            {filteredMovies
              .slice(Math.ceil(filteredMovies.length / 3) * 2)
              .map((movie) => (
                <button
                  className="movie-button"
                  key={movie}
                  onClick={() => selectMovie(movie)}
                >
                  {movie}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Game3;
