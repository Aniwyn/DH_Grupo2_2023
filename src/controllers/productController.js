/* VARIABLE DECLARATION */
const path = require("path");

// borrar
console.log(__dirname)
const BD_provisoria = require(path.join(__dirname, "../../src/Data/BD"));

/* GETS SET */
const productController = {
    mycart : (req,res) => {
        res.render(path.join(__dirname, "../views/products/shopping_cart.ejs"), {BD: BD_provisoria});
    },
    details : (req,res) => {
        let idPag = req.params.id;
        res.render(path.join(__dirname, "../views/products/details.ejs"), {BD: BD_provisoria, data_item: BD_provisoria[idPag-1]});
    },
    editProduct : (req, res) => {
        res.render(path.join(__dirname, "../views/products/edit_product.ejs"))
    },
    colecciones : (req, res) => {
        res.render(path.join(__dirname, "../views/products/colecciones.ejs"))
    }
}

/* EXPORTS */
module.exports = productController;

