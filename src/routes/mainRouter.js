/* VARIABLE DECLARATION */
const express = require('express');
const router = express.Router();



/* REQUIRES ROUTERS */
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');

/* ROUTE CONNECTION */
router.use('/', userRouter);
router.use('/', productRouter);

/* EXPORTS */
module.exports = router;