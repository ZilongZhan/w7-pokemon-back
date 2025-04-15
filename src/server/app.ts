import express from "express";
import handleEndpointNotFound from "./middlewares/handleEndpointNotFount/handleEndpointNotFound.js";

const app = express();

app.use(handleEndpointNotFound);

export default app;
