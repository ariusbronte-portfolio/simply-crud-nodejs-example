'use strict'

const router = require('express').Router();
const {userService} = require('../services/users/userService');
const {ErrorHandler} = require("../../../helpers/error");

const Joi = require('@hapi/joi');
const schema = Joi.object({
    id: Joi.number()
        .integer()
        .greater(0)
        .required(),

    first_name: Joi.string()
        .min(2)
        .max(20),

    last_name: Joi.string()
        .min(2)
        .max(20)
})

router.patch('/', async (req, res, next) => {
    try {
        await schema.validateAsync(req.body).catch(reason => {
            throw new ErrorHandler(422, reason);
        });

        const id = req.body.id;
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;

        const fields = [];
        const params = [];

        if (first_name) {
            fields.push('FirstName = ?');
            params.push(first_name);
        }

        if (last_name) {
            fields.push('LastName = ?');
            params.push(last_name);
        }

        params.push(id);

        await userService.patch(fields, params);

        return res.status(204).send();
    } catch (e) {
        next(e);
    }
});


module.exports = router;