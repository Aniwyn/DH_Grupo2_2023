/* VARIABLE DECLARATION */
const express = require("express")
const app = express()
const path = require("path")
const port = 5000

/* REQUIRES */
const router = require('./routes/mainRouter')

/* EJS SETTING */
app.set('view engine', 'ejs')
app.set('views', './views')

/* PUBLIC SETTING */
app.use(express.static("public"))

/* ROUTE CONNECTION */
app.use("/", router)

/* SERVER LISTEN */
app.listen(port, () => {
    console.log(`[server] corriendo en el puerto ${port} (http://localhost:5000/)`);
})