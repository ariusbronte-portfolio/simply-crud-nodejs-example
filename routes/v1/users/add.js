'use strict'

const router = require('express').Router();
const {userService} = require('../services/users/userService');
const {ErrorHandler} = require("../../../helpers/error");

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
    try {
        await schema.validateAsync(req.body).catch(reason => {
            throw new ErrorHandler(422, reason);
        });

        const first_name = req.body.first_name;
        const last_name = req.body.last_name;

        await userService.post([first_name, last_name]);

        return res.status(200).send();
    } catch (e) {
        next(e);
    }
});

module.exports = router;