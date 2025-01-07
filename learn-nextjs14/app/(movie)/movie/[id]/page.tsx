import { API_URL } from "../../../(home)/page";
import sleep from "../../../utils/sleep";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

const Movie = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log(movie);
  console.log(videos);

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
};

export default Movie;
