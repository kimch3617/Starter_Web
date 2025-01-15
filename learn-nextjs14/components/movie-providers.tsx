import styles from "../styles/movie-credits.module.css";

async function getMovieProviders(id: string) {
  const response = await fetch(`${process.env.API_URL}/${id}/providers`);
  return response.json();
}

const MovieProviders = async ({ id }: { id: string }) => {
    const movieProviders = await getMovieProviders(id);
    console.log(movieProviders);
  
    return (
      <div></div>
    );
  };
  
  export default MovieProviders;