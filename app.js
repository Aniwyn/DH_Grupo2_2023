const express = require("express")
const app = express()
const path = require("path")

app.use(express.static("public"))

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/details", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/details.html"))
})

app.get("/join", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/join.html"))
})

app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.get("/shopping_cart", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/shopping_cart.html"))
})


const port = 5000

app.listen(port, () => {
    console.log(`servidor en el puerto ${port}`);
})