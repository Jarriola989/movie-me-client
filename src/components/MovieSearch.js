import React, { useState, useEffect } from "react";
import { MOVIEDB_API_KEY } from "../constants";
import { MovieCard } from "./MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US`;
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
    } catch (err) {
      console.error(err);
    }
  }, []);

  // const loadNewMovies = async () => {
  //   const url = `https://api.themoviedb.org/3/movie?/popular/api_key=${MOVIEDB_API_KEY}&language=en-US`;
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setMovies(data.results);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("searching...");
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <form className="search-form" onSubmit={searchMovies}>
        <label className="search-label" htmlFor="search-query">
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <input
          className="search-input"
          type="text"
          name="search-query"
          id="search-query"
          placeholder="i.e., Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default MovieSearch;
