/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();

/* REQUIRES CONTROLLERS */
const userController = require('../controllers/userController');
let upload = require('../../middleware/multerMiddleware');
let guestMiddleware = require('../../middleware/guestMiddleware');
let authMiddleware = require('../../middleware/authMiddleware');
let validateRegisterMiddleware = require('../../middleware/validateRegisterMiddleware');
let validateLoginMiddleware = require('../../middleware/validateLoginMiddleware');
const apiUsers = require('../controllers/api/apiUsers');

/* ROUTE-CONTROLLER CONNECTION */
router.get(['/','/home'], userController.home);
router.get('/login', guestMiddleware, userController.login);
router.post('/login', validateLoginMiddleware, userController.processLogin)
router.get('/register', guestMiddleware, userController.register);
router.post('/register', validateRegisterMiddleware, userController.processRegister)
router.get('/logout', userController.logout)
router.get('/profile', authMiddleware, userController.profile)
router.get('/profile/edit', authMiddleware, userController.edit_profile)
router.put('/profile/edit',upload.single('avatar') , userController.put)
router.get('/api/apiUsers', apiUsers.list);
router.get('/api/apiUsers/:id', apiUsers.show);



/* EXPORTS */
module.exports = router;