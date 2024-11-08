import serverless from "serverless-http";
import express from "express";
import { router as peopleRouter } from "./src/routes/people.route.js";
import { syncModels } from "./src/config/db.config.js";
import swaggerUi from 'swagger-ui-express';
import data from './swagger-output.json' assert { type: 'json' };

const app = express();

syncModels();

app.use(express.json());

//app.use('/swagger', swaggerUi.serve, swaggerUi.setup(data))

app.use("/api/people", peopleRouter);

export const handler = serverless(app);

