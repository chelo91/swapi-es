import express from "express";
import { getPeople, getPerson, createPerson } from "../controllers/people.controller.js";
import { parserQueryString } from "../middlewares/parserQueryString.js";
import { validateId } from "../middlewares/validateId.js";
import { validatePerson } from "../middlewares/validatePerson.js";

export const router = express.Router();

router.get('/', parserQueryString, getPeople);
router.get('/:id', validateId, getPerson);
router.post('/', validatePerson, createPerson);
