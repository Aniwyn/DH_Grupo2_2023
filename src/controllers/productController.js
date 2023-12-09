/* VARIABLE DECLARATION */
const path = require("path");
const fs = require("fs");
const fsPromises = require('fs').promises
const jsonPath = path.join(__dirname, '../Data/product.json')

let BD_provisoria = require(path.join(__dirname, "../../src/Data/BD")).product;
let db = require('../../database/models');
const dato = require(path.join(__dirname, "../../src/Data/BD")).dato;
let ProductMethod = require(path.join(__dirname, "../models/Product"))

/* GETS SET */
const productController = {
    //GETS
    mycart: (req, res) => {
        db.Product.findAll({
            include: [{association: 'product_platforms'}]
        })
            .then(products => {
                res.render(path.join(__dirname, "../views/products/shopping_cart.ejs"), { BD: products });
            })
    },
    details: (req, res) => {
        let id = req.params.id;
        let requestProduct = db.Product.findByPk(id, {
            include: [
                {association: 'product_platforms'}, 
                {association: 'product_genres'},
                {association: 'rating_pegi'},
                {association: 'rating_esrb'},
                {association: 'format'},
                {association: 'developer'}
            ]
        })
        let requestAllProducts = db.Product.findAll({
            include: [{association: 'product_platforms'}]
        })

        Promise.all([requestProduct, requestAllProducts])
            .then(([product_detail, products]) => {
                res.render(path.join(__dirname, "../views/products/details.ejs"), { data_item: product_detail, BD: products});
            })
    },
    products: (req, res) => {
        db.Product.findAll({
            include: [{association: 'product_platforms'}]
        })
            .then(products => {
                res.render(path.join(__dirname, "../views/products/products.ejs"), { BD: products });
            })
    },
    create: (req, res) => {
        db.Product.findAll({
            include: [{association: 'product_platforms'}]
        })
            .then(products => {
                res.render(path.join(__dirname, "../views/products/edit_product.ejs"), { BD: products, prod: dato, method: '' })
            })
    },
    editProduct: (req, res) => {
        let id = req.params.id;
        db.Product.findByPk(id, {
            include: [
                {association: 'product_platforms'}, 
                {association: 'product_genres'},
                {association: 'rating_pegi'},
                {association: 'rating_esrb'},
                {association: 'format'},
                {association: 'developer'}
            ]
        })
            .then(product => {
                res.render(path.join(__dirname, "../views/products/edit_product.ejs"), { prod: product, method: 'PUT' })
            })
    },
    // POST PUT
    editProduct_modify: (req, res) => {
        let id = req.params.id;
        let caratula = req.files.dtype != undefined ? req.files['image-cover'][0] : undefined;
        let gameplay = req.files.dtype != undefined ? req.files['image-gameplay'][0] : undefined;
        let text_data = req.body
        let old_product = ProductMethod.searchId(id)

        let ratings = ProductMethod.searchRatings(text_data);
        let platform = ProductMethod.searchPlatform(text_data);
        const putData = {
            name: text_data.name,
            second_name: text_data.sub_name,
            description_1: text_data.description[0],
            description_2: text_data.description[1],
            description_3: text_data.description[2],
            description_4: text_data.description[3],
            cover_image: caratula != undefined ? caratula.path.replace("public", "") : old_product.image,
            price: parseFloat(text_data.price),
            platform: platform,
            release_date: text_data.releaseDate,
            developer: text_data.developer,
            product_genres: text_data.genre,
            format: text_data.format,
            trailer: text_data.trailer,
            gameplay_image: gameplay != undefined ? gameplay.path.replace("public", "") : old_product.gameplay,
            rating_pegi: ratings[0],
            rating_esrb: ratings[1]
        }

        ProductMethod.edit(putData, id)

        res.redirect(`/details/${id}`)
    },
    editProduct_post: (req, res) => {
        const text_data = req.body
        const caratula = req.files['image-cover'][0]
        const gameplay = req.files['image-gameplay'][0]

        let ratings = ProductMethod.searchRatings(text_data);
        let platform = ProductMethod.searchPlatform(text_data);
        let format = ProductMethod.searchFormat(text_data);

        const postData = {
            name: text_data.name,
            second_name: text_data.sub_name,
            description_1: text_data.description[0],
            description_2: text_data.description[1],
            description_3: text_data.description[2],
            description_4: text_data.description[3],
            cover_image: caratula.path.replace("public", ""),
            price: parseFloat(text_data.price),
            platform: platform,
            release_date: text_data.releaseDate,
            developer: text_data.developer,
            product_genres: text_data.genre,
            format: format,
            trailer: text_data.trailer,
            gameplay_image: gameplay.path.replace("public", ""),
            rating_pegi: ratings[0],
            rating_esrb: ratings[1]
        }
        ProductMethod.create(postData);
        res.redirect(`/home`)
    },
    // DELETE
    delete: (req, res) => {
        let id_to_delete = req.params.id;

        db.Product.detroy({
            where: {id: idToDelete}
        })

        fsPromises.unlink(path.join(`${__dirname}/../../public`, BD_provisoria[idToDelete].image))
            .then(() => {
                console.log('Foto eliminada con exito')
            }).catch(err => {
                console.error('Hubo algun error en eliminar la foto del producto', err)
            })
        fsPromises.unlink(path.join(`${__dirname}/../../public`, BD_provisoria[idToDelete].gameplay))
            .then(() => {
                console.log('Foto eliminada con exito')
            }).catch(err => {
                console.error('Hubo algun error en eliminar la foto del producto', err)
            })
            
      /*  for (let i = 0; i < BD_provisoria.length; i++) {
            /*Si es que el id no es el que queremos vamos reconstruyendo un nuevo array */
      /*      if (BD_provisoria[i].id != id) {
                newBD.push(BD_provisoria[i])
            }
            else {
                /*Si es que el id si es el que queremos eliminar borramos al foto */
      /*          fsPromises.unlink(path.join(`${__dirname}/../../public`, BD_provisoria[i].image))
                    .then(() => {
                        console.log('Foto eliminada con exito')
                    }).catch(err => {
                        console.error('Hubo algun error en eliminar la foto del producto', err)
                    })
                fsPromises.unlink(path.join(`${__dirname}/../../public`, BD_provisoria[i].gameplay))
                    .then(() => {
                        console.log('Foto eliminada con exito')
                    }).catch(err => {
                        console.error('Hubo algun error en eliminar la foto del producto', err)
                    })
            }
        } 
        */

        //console.log(newBD);
        //BD_provisoria = newBD;
        

    /*    fs.writeFileSync(jsonPath, JSON.stringify(BD_provisoria, null, 2), "utf8", (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Se sobreescribio correctamente");
        }) */
        res.redirect('/home')
    }
}

/* EXPORTS */
module.exports = productController;

