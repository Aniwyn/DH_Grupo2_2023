/* VARIABLE DECLARATION */
const express = require("express");
const port = 5000;
const methodOverride = require('method-override')
const session = require('express-session')

const app = express();

/* REQUIRES */
const router = require('./routes/mainRouter');

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

/* ROUTE CONNECTION */
app.use("/", router);
// app.use((req,res,next) => {
//     res.status(404).render('UN HTML')
// })

/* SERVER LISTEN */
app.listen(port, () => {
    console.log(`[server] corriendo en el puerto ${port} (http://localhost:${port}/)`);
})