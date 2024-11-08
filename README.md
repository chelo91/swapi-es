# SWAPI-ES

SWAPI-ES is a project that provides an easy-to-use interface for accessing the Star Wars API (SWAPI) with support for the Spanish language.

## Features

- Fetch data from the Star Wars API
- Spanish language support
- Easy integration with other languages

## Installation

To install SWAPI-ES, clone the repository and install the dependencies:

```bash
git clone https://github.com/chelo91/swapi-es.git
cd swapi-es
yarn
cp .env.example .env
serverless offline
```

## Endpoints
| Method | Endpoint | Description     |
| ------ | -------- | --------------- |
| GET    | /people  | Get all people  |
| POST   | /people  | Create a person |

## Roadmap

### Main Points:
- [x] At least 2 endpoints: GET to retrieve information and POST to create an item
- [x] Integration with a database (DynamoDB or **MySQL**) (*I used Sequalize to connect MySQL*)
- [x] Integration with SWAPI
- [x] Translation of attributes from English to Spanish
- [x] Use of Serverless Framework
- [x] Use of Node.js
- [x] Adherence to best development practices

### Bonus Points:
- [ ] Unit tests
- [ ] Use of TypeScript
- [x] Usage documentation
- [ ] Documentation in Open API/Swagger (*I have problems to integrate Swagger with Serverless*)
- [x] Deployment without errors on AWS using the serverless framework deploy command
- [ ] Higher integration complexity
- [x] Use of a framework
- [ ] Domain and layered architecture

### Extra:
- Use of Sequelize ORM
- Postman Collection: [swapi-es.postman_collection.json]