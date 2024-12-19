import React from "react";

export const Movie = ({ movie }) => {
  return (
    <div key={movie.id}>
      <h2>{movie.title}</h2>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};
