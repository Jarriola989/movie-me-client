import React from "react";
import { MOVIEDB_API_KEY } from "../constants";
const MovieSearch = () => {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("searching...");
    let query = "jurassic";

    const url = `https://api.themoviedb.org/3/movie/550?api_key=${MOVIEDB_API_KEY}&language=en-US&query=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };

  return (
    <form className="search-form" onSubmit={searchMovies}>
      <label className="search-label" htmlFor="search-query">
        Movie Name
      </label>
      <input
        className="search-input"
        type="text"
        name="search-query"
        placeholder="i.e., Jurassic Park"
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default MovieSearch;
