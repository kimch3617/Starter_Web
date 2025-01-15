import styles from "../styles/movie-video.module.css"
import sleep from "../app/utils/sleep";

async function getVideos(id: string) {
  // await sleep(5000);
  // throw Error("something error!");
  const response = await fetch(`${process.env.API_URL}/${id}/videos`);
  return response.json();
}

const MovieVideo = async ({ id }: { id: string }) => {
  const video = await getVideos(id);

  return (
    <div className={styles.container}>
      {/* {video.map((video) => (
        <div className={styles.divs} key={video.id} />
        // <iframe
        //   key={video.id}
        //   title={video.name}
        //   src={`https://youtube.com/embed/${video.key}`}
        //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //   allowFullScreen
        // />
      ))} */}
    </div>
  );
};

export default MovieVideo;
