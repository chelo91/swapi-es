import serverless from "serverless-http";
import express from "express";
import { router as peopleRouter } from "./src/routes/people.route.js";
import { getSequelizeInstance, testConnection } from "./src/config/db.config.js";

const app = express();

app.use("/api/people", peopleRouter);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

testConnection();
export const handler = serverless(app);
