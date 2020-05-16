'use strict'

const router = require('express').Router();
const {userService} = require('../services/users/userService');

const Joi = require('@hapi/joi');
const schema = Joi.object({
    first_name: Joi.string()
        .min(2)
        .max(20)
        .required(),

    last_name: Joi.string()
        .min(2)
        .max(20)
        .required()
})

router.post('/', async (req, res, next) => {
    const {error} = await schema.validateAsync(req.body);
    if (error) return res.status(422).send(error);

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;

    await userService.post([first_name, last_name]);

    return res.status(200).send();
});

module.exports = router;