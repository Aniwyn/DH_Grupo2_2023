/* VARIABLE DECLARATION */
const path = require("path");
console.log(__dirname)
const BD_provisoria = require(path.join(__dirname, "../../public/BD-provisoria/BD"));

/* GETS SET */
const productController = {
    mycart : (req,res) => {
        res.render(path.join(__dirname, "../views/products/shopping_cart.ejs"), {BD: BD_provisoria});
    },
    details : (req,res) => {
        let idPag = req.params.id;
        res.render(path.join(__dirname, "../views/products/details.ejs"));
    }
}

/* EXPORTS */
module.exports = productController;