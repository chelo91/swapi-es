export const validateId = (req, res, next) => {
    const id = req.params.id;

    if (!id || isNaN(id) || !Number.isInteger(Number(id))) {
        return res.status(400).json({ message: "Invalid ID. ID must be an integer." });
    }

    next();
};
