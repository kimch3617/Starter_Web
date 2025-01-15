import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";
import "../../../../styles/movie.module.css";
import MovieSimilar from "../../../../components/movie-similar";

interface IParams {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovie(id);
  
  return {
    title: movie.title,
  };
}

const Movie = async ({ params }: IParams) => {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h5>Loading...</h5>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h5>Loading...</h5>}>
        <MovieSimilar id={id} />
      </Suspense>
      {/* <Suspense fallback={<h5>Loading...</h5>}>
        <MovieVideo id={id} />
      </Suspense> */}
    </div>
  );
};

export default Movie;
