/* VARIABLE DECLARATION */
const path = require("path");

/* GETS SET */
const productController = {
    mycart : (req,res) => {
        res.render(path.join(__dirname, "../views/products/shopping_cart.ejs"));
    },
    details : (req,res) => {
        let idPag = req.params.id;
        res.render(path.join(__dirname, "../views/products/details.ejs"));
    }
}

/* EXPORTS */
module.exports = productController;