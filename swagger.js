import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';

dotenv.config();

const { SWAGGER_API_HOST } = process.env;

const doc = {
    info: {
        title: 'swapi-es',
        description: 'Prueba de API de Star Wars en español',
    },
    host: SWAGGER_API_HOST
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes/people.route.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);

