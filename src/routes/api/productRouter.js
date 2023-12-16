const express = require('express');
const router = express.Router();
const apiProvisoria = require ('../../controllers/api/apiProvisoria');

router.get('api/products', apiProvisoria.list);
router.get('api/products/:id', apiProvisoria.show);

module.exports =  router ;