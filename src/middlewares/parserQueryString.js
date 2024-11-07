export const parserQueryString = (req, res, next) => {

    const page = Math.max(1, parseInt(req.query?.page ?? 1));

    res.locals.query = {
        page: page,
    };
    next();
};