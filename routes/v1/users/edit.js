'use strict'

const router = require('express').Router();
const {userService} = require('../services/users/userService');

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
    const {error} = await schema.validateAsync(req.body);
    if (error) return res.status(422).send(error);

    const id = req.body.id;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;

    const fields = [];
    const params = [];

    if(first_name) {
        fields.push('FirstName = ?');
        params.push(first_name);
    }

    if(last_name) {
        fields.push('LastName = ?');
        params.push(last_name);
    }

    params.push(id);

    await userService.patch(fields, params);

    return res.status(200).send();
});


module.exports = router;