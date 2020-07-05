import React from "react";

export const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div className="card">
      <div className="card--image-box">
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
      </div>
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p className="card--release">
          <small>({movie.release_date.slice(0, 4)})</small>
        </p>
      </div>
    </div>
  );
};
