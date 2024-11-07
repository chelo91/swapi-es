import { Model, DataTypes } from 'sequelize';
import sequelize from './database';
import { createSequelizeInstance } from '../config/db.config';

class Person extends Model {
    constructor({ birthYear, eyeColor, films, gender, hairColor, height, homeworld, mass, name, skinColor, created, edited, species, starships, url, vehicles }) {
        super();
        this.birthYear = birthYear;
        this.eyeColor = eyeColor;
        this.films = films;
        this.gender = gender;
        this.hairColor = hairColor;
        this.height = height;
        this.homeworld = homeworld;
        this.mass = mass;
        this.name = name;
        this.skinColor = skinColor;
        this.created = created;
        this.edited = edited;
        this.species = species;
        this.starships = starships;
        this.url = url;
        this.vehicles = vehicles;
    }

    // Método estático para definir el modelo de Sequelize
    static initModel() {
        Person.init({
            birthYear: DataTypes.STRING,
            eyeColor: DataTypes.STRING,
            films: DataTypes.JSON,
            gender: DataTypes.STRING,
            hairColor: DataTypes.STRING,
            height: DataTypes.INTEGER,
            homeworld: DataTypes.STRING,
            mass: DataTypes.INTEGER,
            name: DataTypes.STRING,
            skinColor: DataTypes.STRING,
            created: DataTypes.DATE,
            edited: DataTypes.DATE,
            species: DataTypes.JSON,
            starships: DataTypes.JSON,
            url: DataTypes.STRING,
            vehicles: DataTypes.JSON,
        }, {
            createSequelizeInstance, // Conexión a la base de datos
            modelName: 'Person',
            timestamps: false,
        });
    }

    // Puedes agregar métodos personalizados
    getFullName() {
        return `${this.name} - ${this.birthYear}`;
    }
}

// Inicializa el modelo en la conexión de Sequelize
Person.initModel();

export default Person;
