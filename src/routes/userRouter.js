/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();

/* REQUIRES CONTROLLERS */
const userController = require('../controllers/userController');
let upload = require('../../middleware/multerMiddleware')

/* ROUTE-CONTROLLER CONNECTION */
router.get(['/','/home'], userController.home);
router.get('/login', userController.login);
router.post('login', userController.processLogin)
router.get('/register', userController.register);
router.post('/register',upload.single('avatar') , userController.processRegister)


/* EXPORTS */
module.exports = router;