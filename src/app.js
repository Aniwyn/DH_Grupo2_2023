/* VARIABLE DECLARATION */
const express = require("express");
const port = 5000;
const methodOverride = require('method-override')
const session = require('express-session')
const cookies = require('cookie-parser')
const cors = require('cors');

const app = express();

/* REQUIRES */
const router = require('./routes/mainRouter');
const userLoggedMiddleware = require('../middleware/userLoggedMiddleware');
const productApiProvisoria = require('./routes/api/productRouter');
const userApiUsers = require('./routes/api/userRouter');

/* EJS SETTING */
app.set('view engine', 'ejs');
app.set('views', './views');

/* PUBLIC SETTING */
app.use(express.static("public"));
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(session({
    secret: 'Nuestro secreto',
    resave: false,
    saveUninitialized: false
}))
app.use(cookies())
app.use(userLoggedMiddleware)
app.use(cors({
    origin: 'http://localhost:3000'
}));

/* ROUTE CONNECTION */
app.use("/", router);
app.use(productApiProvisoria);
app.use(userApiUsers);
// app.use((req,res,next) => {
//     res.status(404).render('UN HTML')
// })

/* SERVER LISTEN */
app.listen(port, () => {
    console.log(`[server] corriendo en el puerto ${port} (http://localhost:${port}/)`);
})