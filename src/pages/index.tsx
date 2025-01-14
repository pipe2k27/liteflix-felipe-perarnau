import { prisma } from "@src/lib/prisma";
import type { Movie } from "@prisma/client";
import { FEATURED_FILM } from "@src/lib/endpoints";
import { Bebas_Neue } from "next/font/google";
import Button from "@src/components/button";
import { ChevronDown, Play, PlayCircle, Plus } from "lucide-react";
import Navbar from "@src/components/navbar";
import NavbarMobile from "@src/components/navbarMobile";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Movies({ movies }: { movies: Movie[] }) {
  return (
    <div className={`${bebas.className}`}>
      <div className="wrapper min-h-[100vh] h-fit">
        <Navbar />
        <NavbarMobile />
        <img
          className="fixed top-0 left-0 w-[100vw] h-[100vh] object-cover opacity-80"
          src={`https://image.tmdb.org/t/p/original/${movies[0].image_url}`}
          alt={movies[11].name}
        />
        <div className="gradient-h h-[100vh] w-[100vw] fixed top-0 left-0 " />
        <div className="gradient h-[100vh] w-[100vw] fixed top-0 left-0 " />
        <br />
        <div className="w-[100vw] grid grid-cols-1 lg:grid-cols-[1fr_300px] 2xl:grid-cols-[2fr_1fr] pt-[800px] lg:pt-[80px]   relative">
          <div
            style={{ backgroundImage: `${movies[12].image_url}` }}
            className="flex flex-col w-full relative"
          >
            <div className="flex flex-col items-center lg:items-start w-full absolute bottom-[10vh] text-[20px] lg:left-[10vh] max-1-[100vw] ">
              <div className="tracking-[3px] text-sm lg:text-2xl">
                Original de Liteflix
              </div>
              <h1 className="text-[50px]  lg:text-[90px] lg:tracking-[12px] p-0 m-0 leading-[95px]">
                {movies[0].name}
              </h1>
              <div className="lg:flex">
                <Button
                  text="Reproducir"
                  Icon={Play}
                  className="lg:mr-4 mb-4"
                />
                <Button text="Mi Lista" Icon={Plus} variant="transparent" />
              </div>
            </div>
          </div>
          <div className="relative place-items-center">
            <div className="text-white flex mb-2">
              Ver: Populares
              <ChevronDown className="w-4 ml-1" />
            </div>
            <div className="flex flex-col items-center h-[70vh] lg:overflow-y-scroll scrollbar-hide 5 pb-5">
              {movies.slice(1, movies.length).map((movie) => (
                <div
                  key={movie.id}
                  className="relative flex items-center justify-center mb-6 w-[220px] container hover:scale-95 transition-all cursor-pointer"
                >
                  <PlayCircle className="absolute left-[50%] top-[50px] translate-x-[-50%] z-10" />
                  <div className="uppercase absolute z-40 text-white  w-full text-center bottom-2 font-[400]">
                    {movie.name}
                  </div>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.image_url}`}
                      alt={movie.name}
                      className="rounded-md w-[220px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let movies = await prisma.movie.findMany();
  if (!movies || movies.length < 1) {
    const res = await fetch(FEATURED_FILM);
    const data = await res.json();

    // console.log(data.results);

    const movieArray: any[] = [];

    if (data.results && data.results.length)
      data.results.forEach((movie: any, index: number) => {
        movieArray.push({
          name: movie.title,
          image_url: movie.backdrop_path,
          vote_average: movie.vote_average,
        });
      });

    if (movieArray.length) {
      await prisma.movie.createMany({ data: movieArray });
    }

    movies = await prisma.movie.findMany();
  }

  return {
    props: { movies },
  };
}
