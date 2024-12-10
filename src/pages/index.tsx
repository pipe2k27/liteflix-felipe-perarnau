import "./index.css";
import { Bebas_Neue } from "next/font/google";
import type { Movie } from "@prisma/client";

// Most of the

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Home({
  featured,
  popular,
}: {
  featured: Movie[];
  popular: Movie[];
}) {
  return (
    <div className={bebas.className}>
      <h1>Liteflix Challenge </h1>
      <p> Replace this page with your implementation </p>
    </div>
  );
}

export async function getServerSideProps() {
  const featured = await fetch("api/featured");
  const popular = await fetch("api/featured");

  return {
    props: { featured, popular },
  };
}
