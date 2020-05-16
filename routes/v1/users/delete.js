'use strict'

const router = require('express').Router();
const {userService} = require('../services/users/userService');

const Joi = require('@hapi/joi');
const schema = Joi.object({
    id: Joi.number()
        .integer()
        .greater(0)
        .required()
})

router.delete('/:id', async (req, res, next) => {
    const {error} = await schema.validateAsync(req.body);
    if (error) return res.status(422).send(error);

    const id = req.params.id;

    await userService.delete([id]);

    return res.status(204).send();
});

module.exports = router;