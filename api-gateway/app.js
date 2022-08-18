import express from "express";
import httpProxy from "express-http-proxy";

const app = express();
const PORT = process.env.PORT || 3000;
const MOVIE_API_URL = process.env.MOVIE_API_URL || "http://localhost:8081";
const CHARACTER_API_URL = process.env.CHARACTER_API_URL || "http://localhost:8082";

const starWarsMovieApiService = httpProxy(MOVIE_API_URL);
const starWarsCharacterApiService = httpProxy(CHARACTER_API_URL);

app.use("/api/movies", (req, res, next) => {
  return starWarsMovieApiService(req, res, next);
});

app.use("/api/characters", (req, res, next) => {
  return starWarsCharacterApiService(req, res, next);
});

app.listen(PORT, () => {
  console.info(`Application started at port ${PORT}.`);
});
