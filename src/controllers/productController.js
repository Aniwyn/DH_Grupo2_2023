/* VARIABLE DECLARATION */
const path = require("path");
const fs = require("fs");

console.log(__dirname)
const BD_provisoria = require(path.join(__dirname, "../../src/Data/BD")).product;
const dato = require(path.join(__dirname, "../../src/Data/BD")).dato;

/* GETS SET */
const productController = {
    mycart : (req,res) => {
        res.render(path.join(__dirname, "../views/products/shopping_cart.ejs"), {BD: BD_provisoria});
    },
    details : (req,res) => {
        let id = req.params.id;
        let prod = BD_provisoria.filter((product) => product.id == id);
        res.render(path.join(__dirname, "../views/products/details.ejs"), {BD: BD_provisoria, data_item: prod[0]});
    },
    editProduct : (req, res) => {
        let id = req.params.id;
        let prod = BD_provisoria.filter((product) => product.id == id);
        res.render(path.join(__dirname, "../views/products/edit_product.ejs"), {BD: BD_provisoria, prod: prod[0]})

    },
    products : (req, res) => {
        res.render(path.join(__dirname, "../views/products/products.ejs"), {BD: BD_provisoria});
    },
    delete : (req, res) => {
        let id = req.params.id;
        let newBD = BD_provisoria.filter((product) => product.id != id);
        console.log(newBD[1]);
        const newBDJSON = JSON.stringify(newBD, null, 2);
        const jsonPath = path.join(__dirname, '../Data/BDJson.json')
        fs.writeFile(jsonPath, newBDJSON, "utf8", (err) => {
            if (err) {
               console.log(err);
               return; 
            }
            console.log("correcto");
        })
        res.redirect('/')
    },
    create : (req, res) => {
        console.log(dato)
        res.render(path.join(__dirname, "../views/products/edit_product.ejs"), {BD: BD_provisoria, prod:dato})
    }
}

/* EXPORTS */
module.exports = productController;

