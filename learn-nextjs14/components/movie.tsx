"use client"

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
}

const Movie = ({ id, poster_path, title }: IMovieProps) => {
  const router = useRouter();

  return (
    <div className={styles.movie} key={id}>
      <img src={poster_path} alt={title} onClick={() => router.push(`movie/${id}`)} />
      <Link href={`movie/${id}`}>{title}</Link>
    </div>
  );
};

export default Movie;
