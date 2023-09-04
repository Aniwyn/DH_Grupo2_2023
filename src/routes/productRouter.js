/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();
const path = require('path')


/* REQUIRES CONTROLLERS */
const productController = require('../controllers/productController');

/* ROUTE-CONTROLLER CONNECTION */
router.get('/details/:id', productController.details);
router.get('/mycart', productController.mycart);
router.get('/edit_pruduct', productController.editProduct);
router.get('/colecciones', productController.colecciones);

/* EXPORTS */
module.exports = router;