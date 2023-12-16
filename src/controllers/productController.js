/* VARIABLE DECLARATION */
const path = require("path");
const fsPromises = require('fs').promises
const { validationResult } = require('express-validator')

let db = require('../../database/models');
const productMethod = require("../models/Product");
const dato = require(path.join(__dirname, "../../src/Data/BD")).dato;
let ProductMethod = require(path.join(__dirname, "../models/Product"))

/* GETS SET */
const productController = {
    //GETS
    mycart: (req, res) => {
        db.Product.findAll({
            include: [{association: 'platforms'}]
        })
        .then(products => {
            res.render(path.join(__dirname, "../views/products/shopping_cart.ejs"), { BD: products });
        })
    },
    details: (req, res) => {
        let id = req.params.id;
        
        let requestProduct = db.Product.findByPk(id, {
            include: [
                {association: 'platforms'}, 
                {association: 'genres'},
                {association: 'rating_pegi'},
                {association: 'rating_esrb'},
                {association: 'format'},
                {association: 'developer'}
            ]
        })

        let requestAllProducts = db.Product.findAll({
            limit: 4,
            offset: 8,
            include: [{association: 'platforms'}]
        })

        Promise.all([requestProduct, requestAllProducts])
        .then(([product_detail, products]) => {
            res.render(path.join(__dirname, "../views/products/details.ejs"), { data_item: product_detail, BD: products });
        })
    },
    products: (req, res) => {
        db.Product.findAll({
            include: [{association: 'platforms'}]
        })
        .then(products => {
            res.render(path.join(__dirname, "../views/products/products.ejs"), { BD: products });
        })
    },
    create: (req, res) => {
        db.Product.findAll({
            include: [{association: 'platforms'}]
        })
        .then(products => {
            res.render(path.join(__dirname, "../views/products/edit_product.ejs"), { BD: products, prod: dato, method: '' })
        })
    },
    editProduct: (req, res) => {
        let id = req.params.id;

        db.Product.findByPk(id, {
            include: [
                {association: 'platforms'}, 
                {association: 'genres'},
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
    // POST PUT.
    editProduct_modify: async (req, res) => {
        let id = req.params.id
        let caratula = req.files['image-cover'] ? req.files['image-cover'][0] : undefined
        let gameplay = req.files['image-gameplay'] ? req.files['image-gameplay'][0] : undefined
        let text_data = req.body

        let old_product = await ProductMethod.searchId(id)
        let ratings = await ProductMethod.searchRatings(text_data);
        
        const putData = {
            name: text_data.name,
            second_name: text_data.sub_name,
            description_1: text_data.description[0],
            description_2: text_data.description[1],
            description_3: text_data.description[2],
            description_4: text_data.description[3],
            cover_image: caratula ? caratula.path.replace("public", "") : old_product.cover_image,
            price: parseFloat(text_data.price),
            platform: text_data.platform,
            genres: text_data.genre,
            release_date: text_data.releaseDate,
            developer: text_data.developer,
            product_genres: text_data.genre,
            format: text_data.format,
            trailer: text_data.trailer,
            gameplay_image: gameplay ? gameplay.path.replace("public", "") : old_product.gameplay_image,
            rating_pegi: ratings[0],
            rating_esrb: ratings[1]
        }

        await ProductMethod.edit(putData, id)
        res.redirect(`/details/${id}`)
    },
    editProduct_post: async (req, res) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.render(
                path.join(__dirname, "../views/products/edit_product.ejs"),
                { errors: errors.array(), method: '', prod: dato, old: req.body }
            )
        }

        const text_data = req.body
        const caratula = req.files['image-cover'][0]
        const gameplay = req.files['image-gameplay'][0]

        let ratings = await ProductMethod.searchRatings(text_data)
        let format = ProductMethod.searchFormat(text_data.format)

        const postData = {
            name: text_data.name,
            second_name: text_data.sub_name,
            description_1: text_data.description[0],
            description_2: text_data.description[1],
            description_3: text_data.description[2],
            description_4: text_data.description[3],
            cover_image: caratula.path.replace("public", ""),
            price: parseInt(text_data.price),
            platform: text_data.platform,
            release_date: text_data.releaseDate,
            developer: text_data.developer,
            product_genres: 1,
            format: format,
            trailer: text_data.trailer,
            gameplay_image: gameplay.path.replace("public", ""),
            rating_pegi: ratings[0],
            rating_esrb: ratings[1],
            genre: text_data.genre
        }
        
        await ProductMethod.create(postData)
        return res.redirect(`/home`)
    },
    // DELETE
    delete: async (req, res) => {
        let idToDelete = req.params.id

        await productMethod.delete(idToDelete)

        res.redirect('/home')
    }
}

/* EXPORTS */
module.exports = productController;