import { Model, DataTypes } from 'sequelize';
import { getSequelizeInstance } from '../config/db.config.js';
const sequelize = getSequelizeInstance();

export default class Person extends Model {

    static initModel() { }

}

Person.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    birthYear: DataTypes.STRING,
    eyeColor: DataTypes.STRING,
    films: DataTypes.JSON,
    gender: DataTypes.STRING,
    hairColor: DataTypes.STRING,
    height: DataTypes.INTEGER,
    homeworld: DataTypes.STRING,
    mass: DataTypes.INTEGER,
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    skinColor: DataTypes.STRING,
    created: DataTypes.DATE,
    edited: DataTypes.DATE,
    species: DataTypes.JSON,
    starships: DataTypes.JSON,
    url: DataTypes.STRING,
    vehicles: DataTypes.JSON,
}, {
    sequelize, // Conexión a la base de datos
    modelName: 'person',
    tableName: 'person',
    timestamps: false,
});