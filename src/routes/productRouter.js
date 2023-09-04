/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();
const path = require('path')


/* REQUIRES CONTROLLERS */
const productController = require('../controllers/productController');

/* ROUTE-CONTROLLER CONNECTION */
router.get('/details/:id', productController.details);
router.get('/mycart', productController.mycart);
router.get('/products', productController.products);
router.get('/create', productController.editProduct);
router.get('/details/:id/edit', productController.editProduct);


/* EXPORTS */
module.exports = router;