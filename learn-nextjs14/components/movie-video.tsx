import { API_URL } from "../app/(home)/page";
import sleep from "../app/utils/sleep";

async function getVideos(id: string) {
  await sleep(5000);
  // throw Error("something error!");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

const MovieVideo = async ({ id }: { id: string }) => {
  const video = await getVideos(id);

  return <h6>{JSON.stringify(video)}</h6>;
};

export default MovieVideo;
