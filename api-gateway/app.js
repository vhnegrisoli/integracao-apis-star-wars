import express from "express";
import httpProxy from "express-http-proxy";

const app = express();
const PORT = process.env.PORT || 3000;

const starWarsMovieApiService = httpProxy("http://localhost:8081");
const starWarsCharacterApiService = httpProxy("http://localhost:8082");

app.use("/api/movies", (req, res, next) => {
  return starWarsMovieApiService(req, res, next);
});

app.use("/api/characters", (req, res, next) => {
  return starWarsCharacterApiService(req, res, next);
});

app.listen(PORT, () => {
  console.info(`Application started at port ${PORT}.`);
});
