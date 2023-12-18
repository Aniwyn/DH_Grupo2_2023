const express = require('express');
const router = express.Router();
const apiUsers = require ('../../controllers/api/apiUsers');

router.get('/users', apiUsers.list);
router.get('/users/:id', apiUsers.show);

module.exports =  router ;