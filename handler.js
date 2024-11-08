import serverless from "serverless-http";
import express from "express";
import { router as peopleRouter } from "./src/routes/people.route.js";
import { syncModels } from "./src/config/db.config.js";

const app = express();

syncModels();

app.use(express.json());

// Route for your API
app.use("/api/people", peopleRouter);

export const handler = serverless(app);
