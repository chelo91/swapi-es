import PersonFactory from "../models/person.factory.model.js";

export const validatePerson = (req, res, next) => {

    const {
        año_nacimiento,
        color_ojos,
        películas,
        género,
        color_cabello,
        altura,
        planeta_natal,
        masa,
        nombre,
        color_piel,
        creado,
        editado,
        especies,
        naves_estelares,
        url,
        vehículos
    } = req.body;

    const errors = [];

    // Validaciones para cada campo
    if (typeof año_nacimiento !== 'string') errors.push('año_nacimiento debe ser una cadena.');
    if (typeof color_ojos !== 'string') errors.push('color_ojos debe ser una cadena.');
    if (!Array.isArray(películas) || !películas.every(item => typeof item === 'string')) errors.push('películas debe ser un arreglo de cadenas.');
    if (typeof género !== 'string') errors.push('género debe ser una cadena.');
    if (typeof color_cabello !== 'string') errors.push('color_cabello debe ser una cadena.');
    if (typeof altura !== 'number') errors.push('altura debe ser un número.');
    if (typeof planeta_natal !== 'string') errors.push('planeta_natal debe ser una cadena.');
    if (typeof masa !== 'number') errors.push('masa debe ser un número.');
    if (typeof nombre !== 'string') errors.push('nombre debe ser una cadena.');
    if (typeof color_piel !== 'string') errors.push('color_piel debe ser una cadena.');
    if (isNaN(Date.parse(creado))) errors.push('creado debe ser una fecha válida.');
    if (isNaN(Date.parse(editado))) errors.push('editado debe ser una fecha válida.');
    if (!Array.isArray(especies) || !especies.every(item => typeof item === 'string')) errors.push('especies debe ser un arreglo de cadenas.');
    if (!Array.isArray(naves_estelares) || !naves_estelares.every(item => typeof item === 'string')) errors.push('naves_estelares debe ser un arreglo de cadenas.');
    if (typeof url !== 'string') errors.push('url debe ser una cadena.');
    if (!Array.isArray(vehículos) || !vehículos.every(item => typeof item === 'string')) errors.push('vehículos debe ser un arreglo de cadenas.');

    // Enviar errores si los hay
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    const person = PersonFactory.translatePerson(req.body, 'es', true)
    res.locals.query = {
        person: person,
    };

    next();
};
