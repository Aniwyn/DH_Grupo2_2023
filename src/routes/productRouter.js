/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();
const path = require('path')

/* MIDDLEWARE DECLARATION */
const multer = require("multer")

let storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, "public/images/products")
    },
    filename: function(req, file, cb) {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage: storage})
router.post('/register', upload.single())

/* REQUIRES CONTROLLERS */
const productController = require('../controllers/productController');

/* ROUTE-CONTROLLER CONNECTION */
router.get('/details/:id', productController.details);
router.get('/mycart', productController.mycart);
router.get('/products', productController.products);
router.get('/create', productController.create);
router.get('/details/:id/edit', productController.editProduct);

router.delete('/details/:id', productController.delete);

/* EXPORTS */
module.exports = router;