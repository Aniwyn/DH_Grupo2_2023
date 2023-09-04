/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();

/* REQUIRES CONTROLLERS */
const userController = require('../controllers/userController');

/* ROUTE-CONTROLLER CONNECTION */
router.get(['/','/home'], userController.home);
router.get('/login', userController.login);
router.get('/register', userController.register);


/* EXPORTS */
module.exports = router;