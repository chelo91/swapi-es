import swapi from "swapi-node";
import PersonFactory from "../models/person.factory.model.js";
const getPeople = async (req, res, next) => {
    const user = req.user;
    const nameError = "Delete Product Error";
    const messageError = "Error trying to delete product";

    try {
        const page = res.locals.query.page;
        swapi.get(`https://swapi.dev/api/people/?page=${page}`).then((result) => {
            result.results = result.results.map((person) => {
                return PersonFactory.createPerson(person, "es");
            });
            return res.status(200).json(result);
        });
    } catch (err) {
        next(err);
        //return res.status(400).json(errorMessage("Problems in delete product"));
    }
};

const getPerson = async (req, res, next) => {
    const user = req.user;
    const nameError = "Delete Product Error";
    const messageError = "Error trying to delete product";

    try {
        const id = req.params.id || 1;
        swapi.get(`https://swapi.dev/api/people/${id}`).then((result) => {
            return res.status(200).json(PersonFactory.createPerson(result, "es"));
        });
    } catch (err) {
        next(err);
        //return res.status(400).json(errorMessage("Problems in delete product"));
    }
};

const createPerson = async (req, res, next) => {
    const user = req.user;
    const nameError = "Delete Product Error";
    const messageError = "Error trying to delete product";

    try {
        
    } catch (err) {
        next(err);
        //return res.status(400).json(errorMessage("Problems in delete product"));
    }
};

export { getPeople, getPerson };
