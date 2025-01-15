import styles from "../styles/movie-info.module.css";
import sleep from "../app/utils/sleep";
import MovieCredits from "./movie-credits";
import MovieProviders from "./movie-providers";

export async function getMovie(id: string) {
  // await sleep(2000);
  const response = await fetch(`${process.env.API_URL}/${id}`);
  return response.json();
}

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">Homepage &rarr;</a>
        <MovieCredits id={id} />
      </div>
    </div>
  );
};

export default MovieInfo;
