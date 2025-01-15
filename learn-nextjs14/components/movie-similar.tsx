import Link from "next/link";
import styles from "../styles/movie-similar.module.css";

async function getMovieSimilar(id: string) {
  const response = await fetch(`${process.env.API_URL}/${id}/similar`);
  return response.json();
}

const MovieSimilar = async ({ id }: { id: string }) => {
  const movieSimilar = await getMovieSimilar(id);

  return (
    <div className={styles.container}>
      <h1>Similar Movies</h1>
      <div className={styles.similarMovies}>
        {movieSimilar.map((similar) => (
          <div key={similar.id} className={styles.similar}>
            <Link href={`/movie/${similar.id}`}>
              <img src={similar.poster_path} alt={similar.title} />
            </Link>
            <h4>
              <Link href={`/movie/${similar.id}`}>{similar.title}</Link>
            </h4>
            <h5>⭐️ {similar.vote_average.toFixed(1)}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSimilar;
