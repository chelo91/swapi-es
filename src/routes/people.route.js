import express from "express";
import { getPeople, createPerson } from "../controllers/people.controller.js";
import { parserQueryString } from "../middlewares/parserQueryString.js";
import { validatePerson } from "../middlewares/validatePerson.js";

export const router = express.Router();

router.get('/', parserQueryString, getPeople);
router.post('/', validatePerson, createPerson);
