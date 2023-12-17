/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();

/* REQUIRES ROUTERS */
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const apiProductRouter = require('./api/apiProductRouter');
const apiUserRouter = require('./api/apiUserRouter');

/* ROUTE CONNECTION */
router.use('/', userRouter);
router.use('/', productRouter);
router.use('/api', apiProductRouter);
router.use('/api', apiUserRouter);

/* EXPORTS */
module.exports = router;