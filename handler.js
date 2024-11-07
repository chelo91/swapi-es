import serverless from "serverless-http";
import express from "express";
import { router as peopleRouter } from "./src/routes/people.route.js";
import { syncModels } from "./src/config/db.config.js";

const app = express();
syncModels();
app.use(express.json());

app.use("/api/people", peopleRouter);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

export const handler = serverless(app);

