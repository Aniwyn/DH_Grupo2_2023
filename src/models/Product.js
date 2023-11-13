const fs = require('fs')
const path = require('path')
let BD_provisoria = require(path.join(__dirname, "../../src/Data/BD")).product
let db = require('../../database/models');
const jsonPath = path.join(__dirname, '../Data/product.json')

const productMethod = {
    getData: function() {
        return require(path.join(__dirname, "../../src/Data/BD")).users
    },
    searchId: function(id){
        let productFound = db.Product.findByPk(id)
        return productFound
    },
    searchField: function (field, text) {
        let productFound = BD_provisoria.find(oneProduct => oneProduct[field] === text)
        return productFound
    },
    generateId: function() {
        let lastProduct = BD_provisoria[BD_provisoria.length - 1]
        if (lastProduct) {
            return lastProduct.id + 1
        }
        return 0
    },
    searchPlatform(productData) {
        let platform = []
        if(typeof(productData.platform) == 'string'){
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
                    platform.push(["SEGA", "fa-solid fa-gamepad"]
                    )
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
                        platform.push(["SEGA", "fa-solid fa-gamepad"]
                        )
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
                rating.push(["PEGI_3", "PEGI_3.png"])
                break;
            case "PEGI_7":
                rating.push(["PEGI_7", "PEGI_7.png"])
                break;
            case "PEGI_12":
                rating.push(["PEGI_12", "PEGI_12.png"])
                break;
            case "PEGI_16":
                rating.push(["PEGI_16", "PEGI_16.png"])
                break;
            case "PEGI_18":
                rating.push(["PEGI_18", "PEGI_18.png"])
                break;
            default:
                break;
        }
        ratings.push(rating)

        rating = []
        switch (productData.ranking2) {
            case "ESRB_E":
                rating.push(["ESRB_E", "ESRB_E.svg"])
                break;
            case "ESRB_E10":
                rating.push(["ESRB_E10", "ESRB_E10plus.svg"])
                break;
            case "ESRB_T":
                rating.push(["ESRB_T", "ESRB_T.svg"])
                break;
            case "ESRB_M":
                rating.push(["ESRB_M", "ESRB_M.svg"])
                break;
            case "ESRB_AO":
                rating.push(["ESRB_A0", "ESRB_A0.svg"])
                break;
            default:
                break;
        }
        ratings.push(rating)

        return ratings
    },
    create: function(productData) {
        console.log('ESTOY EN CREATEEEEEEEEE',productData);
        db.Product.create({
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
        })

        return productData
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