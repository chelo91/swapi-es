import express from "express";
import { getPeople, getPerson } from "../controllers/people.controller.js";
import { parserQueryString } from "../middlewares/parserQueryString.js";

export const router = express.Router();

router.get('/', parserQueryString, getPeople);
router.get('/:id', getPerson);
router.post('/', () => { return "hola" });
