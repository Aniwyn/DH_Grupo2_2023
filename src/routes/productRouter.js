/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();
const path = require('path')

/* MIDDLEWARE DECLARATION */
let upload = require('../../middleware/multerMiddleware')

/* REQUIRES CONTROLLERS */
const productController = require('../controllers/productController');
let authMiddleware = require('../../middleware/authMiddleware');
let adminMiddleware = require('../../middleware/adminMiddleware');

let validateCreateProductMiddleware = require('../../middleware/validateProductMiddleware.js');
const apiProvisoria = require('../controllers/api/apiProvisoria');

/* ROUTE-CONTROLLER CONNECTION */
router.get('/mycart', authMiddleware, productController.mycart);
router.get('/details/:id', productController.details);
router.get('/products', productController.products);
router.get('/products/:genre', productController.products_genre)
router.get('/create', authMiddleware, adminMiddleware, productController.create);
router.get('/details/:id/edit', authMiddleware, adminMiddleware, productController.editProduct);
router.put('/details/:id/edit',
    authMiddleware,
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
    authMiddleware,
    validateCreateProductMiddleware,
    productController.editProduct_post
);
router.delete('/details/:id', productController.delete);

router.get('/api/apiProvisoria', apiProvisoria.list);
/*router.get('/api/apiProvisoria/details', apiProvisoria.details);*/
router.get('/api/apiProvisoria/:id', apiProvisoria.show);

/* EXPORTS */
module.exports = router;