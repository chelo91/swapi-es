class PersonFactory {
    static createPerson(person, language = "es", reverse = false) {
        return this.translatePerson(person, language, reverse);
    }

    static translatePerson(person, language, reverse) {
        const translations = {
            en: [
                'first_name', 'last_name', 'birth_year', 'eye_color', 'films', 'gender', 'hair_color',
                'height', 'homeworld', 'mass', 'name', 'skin_color', 'created', 'edited',
                'species', 'starships', 'url', 'vehicles'
            ],
            es: [
                'nombre', 'apellido', 'año_nacimiento', 'color_ojos', 'películas', 'género', 'color_cabello',
                'altura', 'planeta_natal', 'masa', 'nombre', 'color_piel', 'creado', 'editado',
                'especies', 'naves_estelares', 'url', 'vehículos'
            ]
        };

        if (!translations[language]) {
            throw new Error(`El idioma '${language}' no está soportado.`);
        }

        const translatedPerson = {};
        const diccionaryOrigin = reverse ? translations[language] : translations.en;
        const diccionaryDestination = reverse ? translations.en : translations[language];
        /*for (let key in diccionary) {
            if (person[key] !== undefined) {
                translatedPerson[diccionary[key]] = person[key];
            }
        }*/

        for (let i = 0; i < diccionaryOrigin.length; i++) {
            if (person[diccionaryOrigin[i]] !== undefined) {
                translatedPerson[diccionaryDestination[i]] = person[diccionaryOrigin[i]];
            }
        }
        return translatedPerson;
    }
}

export default PersonFactory;