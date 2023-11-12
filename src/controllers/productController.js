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
        db.Product.findAll()
            .then(function(p){
                console.log(p[1]);
            })
        res.render(path.join(__dirname, "../views/products/shopping_cart.ejs"), { BD: BD_provisoria });
    },
    details: (req, res) => {
        let id = req.params.id;
        
        let prod = BD_provisoria.filter((product) => product.id == id);
        res.render(path.join(__dirname, "../views/products/details.ejs"), { BD: BD_provisoria, data_item: prod[0] });
    },
    products: (req, res) => {
        for (let i = 0; i < BD_provisoria.length; i++) {
            console.log(BD_provisoria[i].name)
            console.log(BD_provisoria[i].platform.length + "\n")
        }
        res.render(path.join(__dirname, "../views/products/products.ejs"), { BD: BD_provisoria });
    },
    create: (req, res) => {
        const BD_provisoria = require(path.join(__dirname, "../../src/Data/BD")).product;
        console.log(dato)
        res.render(path.join(__dirname, "../views/products/edit_product.ejs"), { BD: BD_provisoria, prod: dato, method: '' })
    },
    editProduct: (req, res) => {
        let id = req.params.id;
        let product = ProductMethod.searchId(id)
        res.render(path.join(__dirname, "../views/products/edit_product.ejs"), { BD: BD_provisoria, prod: product, method: 'PUT' })
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
            sub_name: text_data.sub_name,
            description: text_data.description,
            image: caratula != undefined ? caratula.path.replace("public", "") : old_product.image,
            price: parseFloat(text_data.price),
            platform: platform,
            releaseDate: text_data.releaseDate,
            developer: text_data.developer,
            genre: text_data.genre,
            format: text_data.format,
            trailer: text_data.trailer,
            gameplay: gameplay != undefined ? gameplay.path.replace("public", "") : old_product.gameplay,
            rating_pegi: ratings[0],
            rating_esrb: ratings[1]
        }

        let productEdit = ProductMethod.searchId(id)
        productEdit = {
            id: productEdit.id,
            ...putData
        }
        ProductMethod.edit(productEdit)

        res.redirect(`/details/${id}`)
    },
    editProduct_post: (req, res) => {
        const dataPost = req.body
        const caratula = req.files['image-cover'][0]
        const gameplay = req.files['image-gameplay'][0]

        let ratings = ProductMethod.searchRatings(dataPost);
        let plataform = ProductMethod.searchPlatform(dataPost);

        const postData = {
            id: dato.id,
            name: dataPost.name,
            sub_name: dataPost.sub_name,
            description: dataPost.description,
            image: caratula.path.replace("public", ""),
            price: parseFloat(dataPost.price),
            plataform: plataform,
            releaseDate: dataPost.releaseDate,
            developer: dataPost.developer,
            gender: dataPost.gender,
            format: dataPost.format,
            trailer: dataPost.trailer,
            gameplay: gameplay.path.replace("public", ""),
            rating_pegi: ratings[0],
            rating_esrb: ratings[1]
        }

        BD_provisoria.push(postData)
        const productJSON = JSON.stringify(BD_provisoria, null, 2);
        const rutaArchivo = './src/Data/product.json';

        fs.writeFile(rutaArchivo, productJSON, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('El archivo JSON ha sido guardado correctamente.');
        });

        console.log('estoy en editProduct_post: ',postData)
        res.redirect(`/home`)
    },
    // DELETE
    delete: (req, res) => {
        let idToDelete = req.params.id;

        //let newBD = []
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

