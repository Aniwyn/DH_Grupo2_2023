const fs = require('fs')
const path = require('path')
let BD_provisoria = require(path.join(__dirname, "../../src/Data/BD")).product
let db = require('../../database/models');
const jsonPath = path.join(__dirname, '../Data/product.json')

const productMethod = {
    getData: function () {
        return require(path.join(__dirname, "../../src/Data/BD")).users
    },
    searchId: function (id) {
        let productFound = db.Product.findByPk(id)
        return productFound
    },
    searchField: function (field, text) {
        let productFound = BD_provisoria.find(oneProduct => oneProduct[field] === text)
        return productFound
    },
    generateId: function () {
        let lastProduct = BD_provisoria[BD_provisoria.length - 1]
        if (lastProduct) {
            return lastProduct.id + 1
        }
        return 0
    },
    searchPlatform(productData) {
        let platform = []
        if (typeof (productData.platform) == 'string') {
            switch (productData.platform) {
                case "PC":
                    platform.push(["PC", "fa-brands fa-windows"])
                    break;
                case "PS":
                    platform.push(["PS", "fa-brands fa-playstation"])
                    break;
                case "XBOX":
                    platform.push(["XBOX", "fa-brands fa-xbox"])
                    break;
                case "SEGA":
                    platform.push(["SEGA", "fa-solid fa-gamepad"])
                    break;
                case "SWITCH":
                    platform.push(["SWITCH", "fa-solid fa-gamepad"])
                    break;
                default:
                    break;
            }
        }
        else {
            for (let i = 0; i < productData.platform.length; i++) {
                switch (productData.platform[i]) {
                    case productData.platform[i] = "PC":
                        platform.push(["PC", "fa-brands fa-windows"])
                        break;
                    case productData.platform[i] = "PS":
                        platform.push(["PS", "fa-brands fa-playstation"])
                        break;
                    case productData.platform[i] = "XBOX":
                        platform.push(["XBOX", "fa-brands fa-xbox"])
                        break;
                    case productData.platform[i] = "SEGA":
                        platform.push(["SEGA", "fa-solid fa-gamepad"])
                        break;
                    case productData.platform[i] = "SWITCH":
                        platform.push(["SWITCH", "fa-solid fa-gamepad"])
                        break;
                    default:
                        break;
                }
            }
        }

        return platform
    },
    searchRatings(productData) {
        let ratings = []

        let rating = []
        switch (productData.ranking1) {
            case "PEGI_3":
                rating.push(1)
                break;
            case "PEGI_7":
                rating.push(2)
                break;
            case "PEGI_12":
                rating.push(3)
                break;
            case "PEGI_16":
                rating.push(4)
                break;
            case "PEGI_18":
                rating.push(5)
                break;
            default:
                break;
        }
        ratings.push(rating)

        rating = []
        switch (productData.ranking2) {
            case "ESRB_E":
                rating.push(1)
                break;
            case "ESRB_E10":
                rating.push(2)
                break;
            case "ESRB_T":
                rating.push(3)
                break;
            case "ESRB_M":
                rating.push(4)
                break;
            case "ESRB_AO":
                rating.push(5)
                break;
            default:
                break;
        }
        ratings.push(rating)

        return ratings
    },
    searchFormat(productData) {
        return productData.format == 'Fisico' ? 1 : 2
    },
    create: async function(productData) {
        let rating_esrb = await db.Rating_ESRB.findByPk(parseInt(productData.rating_esrb))
        let rating_pegi = await db.Rating_PEGI.findByPk(parseInt(productData.rating_pegi))

        let [developer, createdDeveloper] = await db.Developer.findOrCreate({
            where: {
                name: productData.developer
            },
            defaults: {
                name: productData.developer
            }
        })

        const product =  await db.Product.create({
            name: productData.name,
            second_name: productData.second_name,
            description_1: productData.description_1,
            description_2: productData.description_2,
            description_3: productData.description_3,
            description_4: productData.description_4,
            cover_image: productData.cover_image,
            price: productData.price,
            release_date: productData.release_date,
            trailer: productData.trailer,
            gameplay_image: productData.gameplay_image,
            id_rating_esrb: rating_esrb.id,
            id_rating_pegi: rating_pegi.id,
            id_developer: developer.id,
            id_format: productData.format,
        })

        if (!Array.isArray(productData.genre)) productData.genre = [productData.genre]
        for (let i = 0; i < productData.genre.length; i++) {
            const genre = await db.Genre.findOne({
                where: {
                    name: productData.genre[i]
                }
            })
            product.addGenre(genre)
        }

        if (!Array.isArray(productData.platform)) productData.platform = [productData.platform]
        for (let i = 0; i < productData.platform.length; i++) {
            const platform = await db.Platform.findOne({
                where: {
                    name: productData.platform[i]
                }
            })
            product.addPlatform(platform)
        }

        return product
    },
    delete: function (id) {
        BD_provisoria = BD_provisoria.filter(product => product.id !== id)
        fs.writeFileSync(jsonPath, JSON.stringify(BD_provisoria, null, 2), "utf8", (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Se sobreescribio correctamente el Usuario");
        })
        return true
    },
    edit: function (productData, product_id) {
        db.Product.update({
            name: productData.name,
            second_name: productData.second_name,
            description_1: productData.description_1,
            description_2: productData.description_2,
            description_3: productData.description_3,
            description_4: productData.description_4,
            cover_image: productData.cover_image,
            price: productData.price,
            release_date: productData.release_date,
            trailer: productData.trailer,
            gameplay_image: productData.gameplay_image,
            rating_esrb: productData.rating_esrb,
            rating_pegi: productData.rating_pegi,
            developer: productData.developer,
            format: productData.format
        }, {
            where: {
                id: product_id
            }
        })
    }
}

module.exports = productMethod