import React, { useEffect, useState } from 'react'
import './App.css'
import searchicon from './search.svg'
import MovieCard from './MovieCard';

// 14fd1cf
const API_URL = 'https://www.omdbapi.com/?apikey=14fd1cf';


const movie1 = {
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Type": "movie",
  "Poster": "N/A"
}


const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm,setSearchTerm] = useState('')


  const SearchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };
  
  useEffect(() => {
    SearchMovies('superman')
  }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='search for movies'
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value);SearchMovies(searchTerm)}}
        />
        <img
          src={searchicon}
          alt='search'
          onClick={() => SearchMovies(searchTerm)}
        />
      </div>

      {
        movies.length>0
          ?
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
          :
          <div className='empty'>
            <h2>No movies found</h2>
          </div>

      }


    </div>
  )
}

export default App