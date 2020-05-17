'use strict'

const router = require('express').Router();
const {userService} = require('../services/users/userService');
const {ErrorHandler} = require("../../../helpers/error");

const Joi = require('@hapi/joi');
const schema = Joi.object({
    id: Joi.number()
        .integer()
        .greater(0)
        .required()
})

router.delete('/:id', async (req, res, next) => {
    try {
        await schema.validateAsync(req.body).catch(reason => {
            throw new ErrorHandler(422, reason);
        });

        const id = req.params.id;
        await userService.delete([id]);

        return res.status(204).send();
    } catch (e) {
        next(e);
    }
});

module.exports = router;