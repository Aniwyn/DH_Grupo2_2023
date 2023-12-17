/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();
const path = require('path')

/* MIDDLEWARE DECLARATION */
let upload = require('../../middleware/multerMiddleware')

/* REQUIRES CONTROLLERS */
const productController = require('../controllers/productController');
let authMiddleware = require('../../middleware/authMiddleware');
let validateCreateProductMiddleware = require('../../middleware/validateProductMiddleware.js');

/* ROUTE-CONTROLLER CONNECTION */
router.get('/mycart', authMiddleware, productController.mycart);
router.get('/details/:id', productController.details);
router.get('/products', productController.products);
router.get('/products/:genre', productController.products_genre)
router.get('/create', productController.create);
router.get('/details/:id/edit', productController.editProduct);
router.put('/details/:id/edit',
    upload.fields([
        {name: 'image-cover', maxCount: 1},
        {name: 'image-gameplay', maxCount: 1}
    ]),
    validateCreateProductMiddleware,productController.editProduct_modify
);
router.post('/create',
    upload.fields([
        {name: 'image-cover', maxCount: 1},
        {name: 'image-gameplay', maxCount: 1}
    ]),
    validateCreateProductMiddleware,
    productController.editProduct_post
);
router.delete('/details/:id', productController.delete);

/* EXPORTS */
module.exports = router;