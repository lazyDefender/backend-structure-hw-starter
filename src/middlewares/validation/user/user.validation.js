import joi from 'joi';

const create = (req, res, next) => {
    const schema = joi.object({
        id: joi.string().uuid(),
        type: joi.string().required(),
        email: joi.string().email().required(),
        phone: joi.string().pattern(/^\+?3?8?(0\d{9})$/).required(),
        name: joi.string().required(),
        city: joi.string(),
      }).required();
    
    const validationResult = schema.validate(req.body);
    if(validationResult.error) {
        return res.status(400).send({ 
            error: validationResult.error.details[0].message 
        });
    };

    next();
}

const update = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email(),
        phone: joi.string().pattern(/^\+?3?8?(0\d{9})$/),
        name: joi.string(),
        city: joi.string(),
      }).required();
    const validationResult = schema.validate(req.body);
    if(validationResult.error) {
        return res.status(400).send({ 
            error: isValidResult.error.details[0].message
        });
    };

    next();
}

export const userValidation = {
    create,
    update
}