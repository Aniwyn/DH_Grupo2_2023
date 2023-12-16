const fs = require('fs')
const path = require('path')
let BD_provisoria = require(path.join(__dirname, "../../src/Data/BD")).product
let db = require('../../database/models');
const { log } = require('console');
const jsonPath = path.join(__dirname, '../Data/product.json')

const productMethod = {
    getData: function () {
        return require(path.join(__dirname, "../../src/Data/BD")).users
    },
    searchId: async function (id) {
        return db.Product.findByPk(id)
    },
    //borrar (?)
    searchField: function (field, text) {
        return BD_provisoria.find(oneProduct => oneProduct[field] === text)
    },
    //borrar (?)
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
    searchRatings: async function(productData) {
        let ratings = []

        let ratingPEGI = db.Rating_PEGI.findOne({
            where: {
                name: productData.ranking1
            }
        })
        let ratingESRB = db.Rating_ESRB.findOne({
            where: {
                name: productData.ranking2
            }
        })

        await Promise.all([ratingPEGI, ratingESRB])
        .then(([pegi, esrb]) => {
            ratings.push(pegi.id)
            ratings.push(esrb.id)
        })

        return ratings
    },
    searchFormat(productData) {
        return productData == 'Fisico' ? 1 : 2
    },
    addGenre: async function(product, genres) {
        if (!Array.isArray(genres)) genres = [genres]

        for (let i = 0; i < genres.length; i++) {
            const genre = await db.Genre.findOne({
                where: {
                    name: genres[i]
                }
            })
            product.addGenre(genre)
        }
    },
    addPlatform: async function(product, platforms, gameplay_image) {
        if (!Array.isArray(platforms)) platforms = [platforms]
        for (let i = 0; i < platforms.length; i++) {
            const platform = await db.Platform.findOne({
                where: {
                    name: platforms[i]
                }
            })
            product.addPlatform(platform)
        }
    },
    updateImage: async function(product_id, cover_image, gameplay_image) {
        if (cover_image) {
            await db.Product.update({
                cover_image: cover_image,
            }, {
                where: {
                    id: product_id
                }
            })
        }

        if (gameplay_image) {
            await db.Product.update({
                gameplay_image: gameplay_image,
            }, {
                where: {
                    id: product_id
                }
            })
        }
    },
    updateGenres: async function(product, genre) {
        let genresInDB = await product.getGenres()
        let genres = Array.isArray(genre) ? genre : [genre]

        const genresToAdd = genres.filter(genreName => !genresInDB.some(genre => genre.name === genreName));
        const genresToRemove = genresInDB.filter(genre => !genres.includes(genre.name.toString()));

        for (let i = 0; i < genresToAdd.length; i++) {
            const genre = await db.Genre.findOne({
                where: {
                    name: genresToAdd[i]
                }
            })
            product.addGenre(genre)
        }

        for (let i = 0; i < genresToRemove.length; i++) {
            product.removeGenre(genresToRemove[i])
        }
    },
    updatePlatforms: async function(product, platform) {
        let platformInDB = await product.getPlatforms()
        let platforms = Array.isArray(platform) ? platform : [platform]

        const platformsToAdd = platforms.filter(platformName => !platformInDB.some(platform => platform.name === platformName));
        const platformsToRemove = platformInDB.filter(platform => !platforms.includes(platform.name.toString()));

        for (let i = 0; i < platformsToAdd.length; i++) {
            const platform = await db.Platform.findOne({
                where: {
                    name: platformsToAdd[i]
                }
            })
            product.addPlatform(platform)
        }

        for (let i = 0; i < platformsToRemove.length; i++) {
            product.removePlatform(platformsToRemove[i])
        }
    },
    findOrCreateDeveloper: async function(developerName) {
        let [developer, createdDeveloper] = await db.Developer.findOrCreate({
            where: {
                name: developerName
            },
            defaults: {
                name: developerName
            }
        })
        return developer
    },
    create: async function(productData) {
        let developer = await this.findOrCreateDeveloper(productData.developer)

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
            trailer: productData.trailer.replace("watch?v=", "embed/"),
            gameplay_image: productData.gameplay_image,
            id_rating_esrb: productData.rating_esrb,
            id_rating_pegi: productData.rating_pegi,
            id_developer: developer.id,
            id_format: productData.format,
        })

        await this.addGenre(product, productData.genre)
        await this.addPlatform(product, productData.platform)

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
    edit: async function (productData, product_id) {
        let developer = await this.findOrCreateDeveloper(productData.developer)
        let format = this.searchFormat(productData.format)
        let product = await this.searchId(product_id)

        await db.Product.update({
            name: productData.name,
            second_name: productData.second_name,
            description_1: productData.description_1,
            description_2: productData.description_2,
            description_3: productData.description_3,
            description_4: productData.description_4,
            price: productData.price,
            release_date: productData.release_date,
            trailer: productData.trailer.replace("watch?v=", "embed/"),
            id_rating_esrb: productData.rating_esrb,
            id_rating_pegi: productData.rating_pegi,
            id_developer: developer.id,
            id_format: format
        }, {
            where: {
                id: product_id
            }
        })

        await this.updateImage(product_id, productData.cover_image, productData.gameplay_image)
        await this.updateGenres(product, productData.genres)
        await this.updatePlatforms(product, productData.platform)
    }
}

module.exports = productMethod