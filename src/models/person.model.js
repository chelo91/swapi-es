import { Model, DataTypes } from 'sequelize';
import { getSequelizeInstance } from '../config/db.config.js';
const sequelize = getSequelizeInstance();

export default class Person extends Model { }

Person.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    birth_year: DataTypes.STRING,
    eye_color: DataTypes.STRING,
    films: DataTypes.JSON,
    gender: DataTypes.STRING,
    hair_color: DataTypes.STRING,
    height: DataTypes.INTEGER,
    homeworld: DataTypes.STRING,
    mass: DataTypes.INTEGER,
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    skin_color: DataTypes.STRING,
    created: DataTypes.DATE,
    edited: DataTypes.DATE,
    species: DataTypes.JSON,
    starships: DataTypes.JSON,
    url: DataTypes.STRING,
    vehicles: DataTypes.JSON,
}, {
    sequelize, // Conexión a la base de datos
    modelName: 'people',
    tableName: 'people',
    timestamps: false,
}

);