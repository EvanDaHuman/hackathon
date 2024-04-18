import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../components/MovieList.js";

import audio1 from "../threeSecond.mp3";
import audio2 from "../fifteenSecond.mp3";
import audio3 from "../thirtySecond.mp3";

// import totalPoints from  "./App.js";

function Game2({ totalPoints, setTotalPoints }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputText, setInputText] = useState("");
  const correctMovie = "Mission: Impossible";
  const navigate = useNavigate();
  const [audioNum, setAudioNum] = useState(1);
  const audioRef = useRef(null);

  let difficultyArray = ["Impossible", "Hard", "Easy"];
  let lengthArray = ["3", "15", "30"];
  const audioFiles = [audio1, audio2, audio3];

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
      if (audioNum === 1) {
        setTotalPoints(totalPoints + 10);
      } else if (audioNum === 2) {
        setTotalPoints(totalPoints + 7);
      } else {
        setTotalPoints(totalPoints + 5);
      }
      navigate("/win");
    } else {
      console.log("Incorrect. Try again.");
      setAudioNum(audioNum + 1);
      <audio ref={audioRef} src={audioFiles[audioNum - 1]} />;

      if (audioNum >= 3) {
        console.log("ran");
        setAudioNum(1);
        navigate("/lose");
      }
    }
  }

  const playAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  return (
    <div className="movie-dropdown">
      <Link ink to="/game">
        <button className="backButton"> Back </button>
      </Link>
      <h1 className="title">Guess the movie by the soundtrack</h1>
      <h2 className="subtitle">
        {lengthArray[audioNum - 1]} seconds: {difficultyArray[audioNum - 1]}
      </h2>
      <audio ref={audioRef} src={audioFiles[audioNum - 1]} />
      <button
        onClick={() => playAudio()}
        style={{
          // backgoundImage: "url('./playAudio.png')",
          backgroundSize: "cover",
          width: "210px",
          height: "210px",
          borderRadius: "50%",
        }}
      >
        <img src="/playAudio.png" width="200" height="200"></img>
      </button>

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
