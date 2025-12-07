import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler (request: NextApiRequest, response: NextApiResponse)  {


  if (request.method === "POST") {
    const { year, page, genre } = request.body;
    const date = new Date();
    const resp = await fetch(
      `https://moviesdatabase.p.rapidapi.com/titles?year=${
        year || date.getFullYear()
      }&sort=year.decr&limit=12&page=${page}&${genre && `genre=${genre}`}`,
      {
        headers: {
          "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
          "x-rapidapi-key":"2f3966aacfmshcf8db9627be20abp14877bjsn81f985f04c5e",
        },
      }
    );

  if (!resp.ok) {
  const text = await resp.text();
  console.error("ERR:", resp.status, text);
  throw new Error(`RapidAPI error: ${resp.status}`);
}

    const moviesResponse = await resp.json();
    const movies: MoviesProps[] = moviesResponse.results;

    return response.status(200).json({
      movies,
    });
  } else {
    response.setHeader('Allow', ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed in here`);
  }
};