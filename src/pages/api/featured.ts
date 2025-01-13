// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export const FEATURED_FILM =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20";

type Movie = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie>
) {
  // Your api fetching code here
  res.status(200).json({ name: "Moana" });
}
