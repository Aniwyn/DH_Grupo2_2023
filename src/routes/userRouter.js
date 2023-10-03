/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();

/* REQUIRES CONTROLLERS */
const userController = require('../controllers/userController');
let upload = require('../../middleware/multerMiddleware');
let guestMiddleware = require('../../middleware/guestMiddleware');
let authMiddleware = require('../../middleware/authMiddleware');
let validateRegisterMiddleware = require('../../middleware/validateRegisterMiddleware');

/* ROUTE-CONTROLLER CONNECTION */
router.get(['/','/home'], userController.home);
router.get('/login', guestMiddleware, userController.login);
router.post('/login', userController.processLogin)
router.get('/register', guestMiddleware, userController.register);
router.post('/register', userController.processRegister)
router.get('/logout', userController.logout)
router.get('/profile', authMiddleware, userController.profile)


/* EXPORTS */
module.exports = router;