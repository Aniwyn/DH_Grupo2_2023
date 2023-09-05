/* VARIABLE DECLARATION */
const path = require("path");
const fs = require('fs');


// borrar
console.log(__dirname)
const BD_provisoria = require(path.join(__dirname, "../../src/Data/BD"));

/* GETS SET */
const productController = {
    mycart: (req, res) => {
        res.render(path.join(__dirname, "../views/products/shopping_cart.ejs"), { BD: BD_provisoria });
    },
    details: (req, res) => {
        let idPag = req.params.id;
        res.render(path.join(__dirname, "../views/products/details.ejs"), { BD: BD_provisoria, data_item: BD_provisoria[idPag - 1] });
    },
    editProduct: (req, res) => {
        let id = req.params.id;
        res.render(path.join(__dirname, "../views/products/edit_product.ejs"), { BD: BD_provisoria, prod: BD_provisoria[id - 1] })

    },
    editProduct_modify: (req, res) => {
        let id = req.params.id;
        const text_data = req.body
        console.log(req.files.dtype == undefined);
        const caratula = req.files.dtype != undefined ? req.files['image-cover'][0] : undefined;
        const gameplay = req.files.dtype != undefined ? req.files['image-gameplay'][0] : undefined;

        BD_provisoria.find((prod) => {
            if(prod.id == id){
                console.log(text_data);
                prod.name = text_data.name;
                prod.sub_name = text_data.sub_name;
                prod.format = text_data.format;
                prod.releaseDate = text_data.releaseDate;
                prod.developer = text_data.developer;
                prod.price = parseFloat(text_data.price);
                prod.trailer = text_data.trailer;
                prod.ranking = [].concat(text_data.ranking1, text_data.ranking2);
                prod.plataform = text_data.plataform;

                prod.image = caratula != undefined ? caratula.path : prod.image
                prod.gameplay = gameplay != undefined ? gameplay.path : prod.gameplay


                console.log(prod);
            }
        })

        // const productJSON = JSON.stringify(BD_provisoria, null, 2);
        // const rutaArchivo = './src/Data/BDJson.json';

        // fs.writeFile(rutaArchivo, productJSON, 'utf8', (err) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     console.log('El archivo JSON ha sido guardado correctamente.');
        // });

        res.redirect(`/details/${id}/edit`)
    },
    products: (req, res) => {
        res.render(path.join(__dirname, "../views/products/products.ejs"), { BD: BD_provisoria });
    }
}

/* EXPORTS */
module.exports = productController;

