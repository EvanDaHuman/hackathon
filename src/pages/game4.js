import { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../components/MovieList.js";
import { Link } from "react-router-dom";

function Game4({ totalPoints, setTotalPoints }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputText, setInputText] = useState("");
  const correctMovie = "Fast and Furious 5";
  const navigate = useNavigate();
  const [frameNum, setFrameNum] = useState(1);

  let quoteList = [
    <p>When I win here, I'll buy you a lifetime supply of antidepressants.</p>,
    <p>You don't need to send a man to do a woman's job.</p>,
    <p>Hey Toretto, you're under arrest.</p>,
  ];
  let difficultyArray = ["Impossible", "Hard", "Easy"];

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
        navigate("/lose");
      }
    }
  }

  return (
    <div
      className="game4-movie-dropdown"
      style={{ height: showDropdown ? "120vh" : "100vh" }}
    >
      <Link to="/game">
        <button className="backButton"> Back</button>
      </Link>
      <h1 className="title">Guess the movie by the quote</h1>
      <img src="/speechbubble.svg.png" width="400" height="250" />
      <h3
        style={{
          transform: "translate(15%, -160%)",
          fontSize: "19px", // Adjust the font size as needed
          padding: "5px", // Adjust the padding
          margin: "0", // Adjust the margin
          width: "200px", // Set the width of the text box
          whiteSpace: "pre-wrap", // Allow the text to wrap at the end of each line
        }}
      >
        {quoteList[frameNum - 1]}
      </h3>
      <h2 className="subtitle">
        Quote {frameNum}: {difficultyArray[frameNum - 1]}
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
export default Game4;
