import React from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

export const Movie = ({ movie }) => {
  return (
    <div key={movie.id} className={styles.movie}>
      <img
        src={movie.medium_cover_image}
        alt={movie.title}
        className={styles.movie__img}
      />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{movie.year}</h3>
        <p>
          {movie.summary.length > 235
            ? `${movie.summary.slice(0, 235)}...`
            : movie.summary}
        </p>
        <ul className={styles.movie__genres}>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
