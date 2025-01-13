import { prisma } from "@src/lib/prisma";
import type { Movie } from "@prisma/client";
import { FEATURED_FILM } from "@src/lib/endpoints";
import "./movies.css";

// This allows us to visualize movies in the database

export default function Movies({ movies }: { movies: Movie[] }) {
  return (
    <div className="wrapper">
      <h1 className="h1"> Movies </h1>
      <br />
      {movies.map((movie) => (
        <div key={movie.id} className="movie">
          <h4>{movie.name}</h4>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.image_url}`}
              alt={movie.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  // const res = await fetch(FEATURED_FILM);
  // const data = await res.json();

  // // console.log(data.results);

  // const movieArray: any[] = [];

  // if (data.results && data.results.length)
  //   data.results.forEach((movie: any, index: number) => {
  //     movieArray.push({
  //       // id: index,
  //       name: movie.title,
  //       image_url: movie.backdrop_path,
  //       vote_average: movie.vote_average,
  //     });
  //   });

  // if (movieArray.length) {
  //   const store = await prisma.movie.createMany({ data: movieArray });
  // }

  const movies = await prisma.movie.findMany();

  return {
    props: { movies },
  };
}
