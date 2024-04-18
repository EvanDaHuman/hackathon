import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';


const movies = [
  "Spiderman",
  "Spy Kids",
  "Star Wars",
  "Superman",
  "The Godfather",
  "The Matrix",
  "The Avengers",
  "The Lion King"
];



function MovieDropDown() {

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [inputText, setInputText] = useState("");
  const correctMovie = "Spiderman";
  const navigate = useNavigate();
  const [frameNum, setFrameNum] = useState(1);
  
  let difficultyArray = [];
    difficultyArray.push("Impossible");
    difficultyArray.push("Hard");
    difficultyArray.push("Easy")

	let imageArray = [];
		imageArray.push(<img src="/movieFrame1.png" width = "700" height = "300"/>)
		imageArray.push(<img src="/movieFrame2.png" width = "700" height = "300"/>)
		imageArray.push(<img src="/movieFrame3.jpg" width = "700" height = "300"/>)



  function filterMovies(event) {
    setInputText(event.target.value);
    const query = event.target.value.toLowerCase();
    const filtered = movies.filter(movie => movie.toLowerCase().startsWith(query));
    setFilteredMovies(filtered);
    setShowDropdown(query.length > 0); // Show dropdown only if there is at least one character typed
    setSelectedMovie('');
  }
  
  function selectMovie(movie) {
    setSelectedMovie(movie);
    setShowDropdown(false);
    checkMovie(movie);
  }

  function checkMovie(movie) {
    if (movie === correctMovie) {
        //change url to /win
        navigate('/win');
    } else {
      console.log("Incorrect. Try again.");
      setFrameNum(frameNum+1);

			if (frameNum >=3){
				console.log("ran")
				setFrameNum(1);
				navigate('/lose');
			}
    }
  }

  

  return (
    <div className="movie-dropdown">
      <Link to="/game">
        <button className = "backButton"> Back</button>
      </Link>
      <h1 className="title">Guess the movie by the frame</h1>
      <h2 className="subtitle">Frame {frameNum}: {difficultyArray[frameNum-1]}</h2>
      {imageArray[frameNum-1]}
      <input
        className='text-box'
        type="text"
        placeholder="Enter movie..."
        onChange={filterMovies}
        //value={selectedMovie}
      />
      {showDropdown && (
        <div className="dropdown-content">
        {filteredMovies.map(movie => (
          <button className = "movie-button" key={movie} onClick={() => selectMovie(movie)}>
            {movie}
          </button>
        ))}
      </div>
      
      )}
    </div>
  );
}

export default MovieDropDown;

