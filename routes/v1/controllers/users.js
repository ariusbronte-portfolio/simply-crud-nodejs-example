'use strict'

const router = require('express').Router();

const get = require('../users/get');
const add = require('../users/add');
const edit = require('../users/edit');
const $delete = require('../users/delete');

router.use('/get', get);
router.use('/add', add);
router.use('/edit', edit);
router.use('/delete', $delete);

module.exports = router;