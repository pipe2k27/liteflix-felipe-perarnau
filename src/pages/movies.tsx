import { prisma } from "@src/lib/prisma";

export default async function Movies() {
  const movies = await prisma.movie.findMany();
  return (
    <div>
      <h1> Movies </h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
}
