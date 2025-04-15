import express from "express";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFount/handleEndpointNotFound.js";
import handleHealthCheck from "./middlewares/handleHealthCheck/handleHealthCheck.js";

const app = express();

app.get("/", handleHealthCheck);

app.use(handleEndpointNotFound);

export default app;
