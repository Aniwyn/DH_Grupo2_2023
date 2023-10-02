/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();
const path = require('path')

/* MIDDLEWARE DECLARATION */
const multer = require("multer")
let storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, "public/images/upload")
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toJSON().slice(0,10) + '-' + path.basename(file.originalname))
    }
})
let upload = multer({storage: storage})

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