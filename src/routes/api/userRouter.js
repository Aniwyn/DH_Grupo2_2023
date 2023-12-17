const express = require('express');
const router = express.Router();
const apiUsers = require ('../../controllers/api/apiUsers');

router.get('api/users', apiUsers.list);
router.get('api/users/:id', apiUsers.show);

module.exports =  router ;