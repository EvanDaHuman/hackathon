import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";
import movies from "../components/MovieList.js";
// import totalPoints from  "./App.js";

function Game2({ totalPoints, setTotalPoints }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [inputText, setInputText] = useState("");
  const correctMovie = "Spiderman";
  const navigate = useNavigate();
  const [frameNum, setFrameNum] = useState(1);

  let difficultyArray = ["Impossible", "Hard", "Easy"];
  let lengthArray = ["3", "15", "30"];

  function filterMovies(event) {
    setInputText(event.target.value);
    const query = event.target.value.toLowerCase();
    const filtered = movies.filter((movie) =>
      movie.toLowerCase().startsWith(query)
    );
    setFilteredMovies(filtered);
    setShowDropdown(query.length > 0);
    setSelectedMovie("");
  }

  function selectMovie(movie) {
    setSelectedMovie(movie);
    setShowDropdown(false);
    checkMovie(movie);
  }

  function checkMovie(movie) {
    if (movie === correctMovie) {
      if (frameNum == 1) {
        totalPoints += 10;
      } else if (frameNum == 2) {
        totalPoints += 7;
      } else {
        totalPoints += 5;
      }
      navigate("/win");
    } else {
      console.log("Incorrect. Try again.");
      setFrameNum(frameNum + 1);

      if (frameNum >= 3) {
        console.log("ran");
        setFrameNum(1);
        navigate("/lose");
      }
    }
  }

  return (
    <div className="movie-dropdown">
      <Link to="/game">
        <button className="backButton"> Back </button>
      </Link>
      <h1 className="title">Guess the movie by the soundtrack</h1>
      <h2 className="subtitle">
        {lengthArray[frameNum - 1]} seconds: {difficultyArray[frameNum - 1]};
      </h2>

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

export default Game2;
