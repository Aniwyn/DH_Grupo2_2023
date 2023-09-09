/* VARIABLE DECLARATION */
const express = require("express");
const app = express();
const path = require("path");
const port = 5000;
const methodOverride = require('method-override')

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

/* ROUTE CONNECTION */
app.use("/", router);
// app.use((req,res,next) => {
//     res.status(404).render('UN HTML')
// })

/* SERVER LISTEN */
app.listen(port, () => {
    console.log(`[server] corriendo en el puerto ${port} (http://localhost:${port}/)`);
})