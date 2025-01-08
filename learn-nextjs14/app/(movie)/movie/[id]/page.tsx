import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";
import "../../../../styles/movie.module.css"

const Movie = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h5>Loading...</h5>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h5>Loading...</h5>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
};

export default Movie;
