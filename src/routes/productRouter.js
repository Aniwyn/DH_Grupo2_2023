/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();

/* REQUIRES CONTROLLERS */
const productController = require('../controllers/productController');

/* ROUTE-CONTROLLER CONNECTION */
router.get('/details/:id', productController.details);
router.get('/mycart', productController.mycart);
router.get('/create', productController.editProduct);
router.get('/details/:id/edit', productController.editProduct);

/* EXPORTS */
module.exports = router;