import express, { Application } from "express";
import cors from "cors";
import axios from "axios";
import { handleErrors } from "./errors";
import movieDetailRoutes from "./routers/movieDetail.routes";
import moviesRoutes from "./routers/movies.routes";

const app: Application = express();
app.use(cors());

app.use(express.json());
app.use("/movies", moviesRoutes);
app.use("/movie", movieDetailRoutes);
app.use(handleErrors);

export default app;
