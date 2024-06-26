import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";

import movies from "../components/MovieList.js";
// import totalPoints from  "./App.js";

function Game5({ totalPoints, setTotalPoints }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputText, setInputText] = useState("");
  const correctMovie = "Inception";
  const navigate = useNavigate();
  const [frameNum, setFrameNum] = useState(1);

  let difficultyArray = ["Impossible", "Hard", "Easy"];

  let imageArray = [
    <img src="/object1.png" width="500" height="500" />,
    <img src="/object2.png" width="500" height="500" />,
    <img src="/object3.png" width="500" height="500" />,
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
      } else {
        setTotalPoints(totalPoints + 5);
      }
      navigate("/win");
    } else {
      console.log("Incorrect. Try again.");
      setFrameNum(frameNum + 1);

      if (frameNum >= 3) {
        console.log("ran");
        setFrameNum(1);
        navigate('/lose', { state: { correctAnswer: correctMovie } }); // Pass correct answer to /lose route
      }
    }
  }

  return (
    <div className="movie-dropdown">
      <Link to="/game">
        <button className="backButton"> Back</button>
      </Link>
      <h1 className="title">Guess the movie by the object</h1>
      <h2 className="subtitle">
        Object {frameNum}: {difficultyArray[frameNum - 1]}
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

export default Game5;
