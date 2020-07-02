import React from "react";

const MovieSearch = () => {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("searching...");
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
