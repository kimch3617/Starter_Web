import styles from "../styles/movie-credits.module.css";

async function getMovieCredits(id: string) {
  const response = await fetch(`${process.env.API_URL}/${id}/credits`);
  return response.json();
}

const MovieCredits = async ({ id }: { id: string }) => {
  const movieCredits = await getMovieCredits(id);

  return (
    <div className={styles.container}>
      <h1>Credits</h1>
      <div className={styles.credits}>
        {movieCredits.map((credit) => (
          <div key={credit.id} className={styles.credit}>
            <img src={credit.profile_path} alt={credit.original_name} />
            <h4>{credit.original_name}</h4>
            <h5>{credit.character}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCredits;
