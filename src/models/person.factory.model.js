class PersonFactory {
    static createPerson(user, language = "es") {
        return this.translatePerson(user, language);
    }

    static translatePerson(user, language) {
        const translations = {
            es: {
                firstName: 'nombre',
                lastName: 'apellido',
                birthYear: 'añoDeNacimiento',
                eyeColor: 'colorDeOjos',
                films: 'películas',
                gender: 'género',
                hairColor: 'colorDeCabello',
                height: 'altura',
                homeworld: 'planetaNatal',
                mass: 'masa',
                name: 'nombre',
                skinColor: 'colorDePiel',
                created: 'creado',
                edited: 'editado',
                species: 'especies',
                starships: 'navesEstelares',
                url: 'url',
                vehicles: 'vehículos'
            }
        };

        if (!translations[language]) {
            throw new Error(`El idioma '${language}' no está soportado.`);
        }

        const translatedUser = {};
        const diccionary = translations[language];
        for (let key in diccionary) {
            if (user[key] !== undefined) {
                translatedUser[diccionary[key]] = user[key];
            }
        }
        return translatedUser;
    }
}

export default PersonFactory;