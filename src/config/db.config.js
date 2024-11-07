// database.js - Configuración de Sequelize con patrón Singleton
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

let sequelizeInstance = null; // Variable para almacenar la instancia de Sequelize

function createSequelizeInstance() {
    const host = process.env.DB_HOST;
    const user = process.env.DB_USER;
    const type = process.env.DB_TYPE;
    const password = process.env.DB_PASSWORD;
    const database = process.env.DB_NAME;
    const port = process.env.DB_PORT || 3306;

    if (!host || !user || !type || !password || !database) {
        throw new Error('Faltan variables de entorno para la conexión a la base de datos.');
    }

    return new Sequelize(database, user, password,{
        host: host,
        dialect: type,
        port: port,
        define: {
            timestamps: false
        },
        logging: false, // Desactiva los logs para optimización
    });
}

export function getSequelizeInstance() {
    if (!sequelizeInstance) {
        sequelizeInstance = createSequelizeInstance();
        console.log("Instancia de Sequelize creada.");
    } else {
        console.log("Instancia de Sequelize reutilizada.");
    }
    return sequelizeInstance;
}

// Prueba la conexión cuando se llame por primera vez
export async function testConnection() {
    const sequelize = getSequelizeInstance();
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente con la base de datos.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}
