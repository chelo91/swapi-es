import swapi from "swapi-node";
import PersonFactory from "../models/person.factory.model.js";
import Person from "../models/person.model.js";

const getPeople = async (req, res, next) => {
    try {
        const page = res.locals.query.page;
        const people = await swapi.get(`https://swapi.dev/api/people/?page=${page}`);
        people.results = people.results.map((person) => {
            return PersonFactory.createPerson(person, "es");
        });
        if (people.next == null) {
            const peopleSql = await Person.findAll();
            const peopleSqlEs = peopleSql.map((person) => {
                return PersonFactory.createPerson(person, "es");
            });
            people.results = people.results.concat(peopleSqlEs);
        }
        return res.status(200).json(people);
    } catch (err) {
        return res.status(400).json(err);
    }
};

const createPerson = async (req, res, next) => {
    const user = req.user;
    const nameError = "Delete Product Error";
    const messageError = "Error trying to delete product";
    const person = res.locals.query.person;
    try {
        const similarNames = await swapi.get(`https://swapi.dev/api/people/?search=${person.name}`);
        if (similarNames.count > 0) {
            for (const name of similarNames.results) {
                if (name.name === person.name) {
                    return res.status(400).json({ error: "Person already exists" });
                }
            }
        }
        const newPerson = await Person.create(person);
        return res.status(200).json(newPerson);
    } catch (err) {
        return res.status(400).json(err);
    }
};

export { getPeople, createPerson };
