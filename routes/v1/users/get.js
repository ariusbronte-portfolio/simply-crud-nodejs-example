'use strict'

const router = require('express').Router();
const { userService } = require('../services/users/getService');

router.get('/', async (req, res) => {
    return res.status(200).send(await userService.get());
});

module.exports = router;