import express from "express";
import morgan from "morgan";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFount/handleEndpointNotFound.js";
import handleHealthCheck from "./middlewares/handleHealthCheck/handleHealthCheck.js";
import pokemonRouter from "../pokemon/router/pokemonRouter.js";

const app = express();

app.use(morgan("dev"));

app.get("/", handleHealthCheck);

app.use("/pokemon", pokemonRouter);

app.use(handleEndpointNotFound);

export default app;
