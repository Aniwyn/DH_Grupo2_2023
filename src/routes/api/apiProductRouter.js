const express = require('express');
const router = express.Router();
const apiProduct = require ('../../controllers/api/apiProduct');

router.get('/products', apiProduct.list);
router.get('/products/:id', apiProduct.show);
router.get('/genres', apiProduct.genres);

module.exports =  router;