/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();
const path = require('path')

/* MIDDLEWARE DECLARATION */

let upload = require('../../middleware/multerMiddleware')

/* REQUIRES CONTROLLERS */
const productController = require('../controllers/productController');

/* ROUTE-CONTROLLER CONNECTION */
router.get('/details/:id', productController.details);
router.get('/mycart', productController.mycart);
router.get('/products', productController.products);
router.get('/create', productController.create);
router.get('/details/:id/edit', productController.editProduct);
router.put('/details/:id/edit',upload.fields([
    {name: 'image-cover', maxCount: 1},
    {name: 'image-gameplay', maxCount: 1}
]), productController.editProduct_modify);
router.post('/create',upload.fields([
    {name: 'image-cover', maxCount: 1},
    {name: 'image-gameplay', maxCount: 1}
]), productController.editProduct_post);

router.delete('/details/:id', productController.delete);

/* EXPORTS */
module.exports = router;