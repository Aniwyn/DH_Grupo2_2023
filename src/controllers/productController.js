/* VARIABLE DECLARATION */
const path = require("path")

/* GETS SET */
const productController = {
    mycart : (req,res) => {
        res.sendFile(path.join(__dirname, "../views/products/shopping_cart.html"))
    },
    details : (req,res) => {
        let idPag = req.params.id;
        res.sendFile(path.join(__dirname, "../views/products/details.html"))
    }
}

/* EXPORTS */
module.exports = productController;