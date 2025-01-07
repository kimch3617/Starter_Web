import Link from "next/link";
import sleep from "../utils/sleep";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

const Page = async () => {
  const movies = await getMovies();
  // await sleep(1000);

  return (
    <div>
      {movies.map((movie) => <li key={movie.id}><Link href={`movie/${movie.id}`}>{movie.title}</Link></li>)}
    </div>
  );
};

export default Page;
