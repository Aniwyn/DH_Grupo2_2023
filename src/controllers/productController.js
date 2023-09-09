/* VARIABLE DECLARATION */
const path = require("path");
const fs = require("fs");

console.log(__dirname)
const BD_provisoria = require(path.join(__dirname, "../../src/Data/BD")).product;
const dato = require(path.join(__dirname, "../../src/Data/BD")).dato;

/* GETS SET */
const productController = {
    mycart: (req, res) => {
        res.render(path.join(__dirname, "../views/products/shopping_cart.ejs"), { BD: BD_provisoria });
    },
    details: (req, res) => {
        let id = req.params.id;
        let prod = BD_provisoria.filter((product) => product.id == id);
        res.render(path.join(__dirname, "../views/products/details.ejs"), { BD: BD_provisoria, data_item: prod[0] });
    },
    editProduct: (req, res) => {
        let id = req.params.id;
        let prod = BD_provisoria.filter((product) => product.id == id);
        res.render(path.join(__dirname, "../views/products/edit_product.ejs"), { BD: BD_provisoria, prod: prod[0], method: 'PUT' })
    },
    editProduct_modify: (req, res) => {
        let id = req.params.id;
        auxR = [];
        auxP = [];
        const text_data = req.body
        const caratula = req.files.dtype != undefined ? req.files['image-cover'][0] : undefined;
        const gameplay = req.files.dtype != undefined ? req.files['image-gameplay'][0] : undefined;

        BD_provisoria.find((prod) => {
            if (prod.id == id) {
                prod.name = text_data.name;
                prod.sub_name = text_data.sub_name;
                prod.description = text_data.description;
                prod.image = caratula != undefined ? caratula.path : prod.image;
                prod.price = parseFloat(text_data.price);

                if (typeof (text_data.plataform) == "string") {
                    switch (text_data.plataform) {
                        case "PC":
                            auxP.push(["PC", "fa-brands fa-windows"])
                            break;
                        case "PS":
                            auxP.push(["PS", "fa-brands fa-playstation"])
                            break;
                        case "XBOX":
                            auxP.push(["XBOX", "fa-brands fa-xbox"])
                            break;
                        case "SEGA":
                            auxP.push(["SEGA", "fa-solid fa-gamepad"]
                            )
                            break;
                        case "SWITCH":
                            auxP.push(["SWITCH", "fa-solid fa-gamepad"])
                            break;
                        default:
                            break;
                    }
                }
                else{  
                    for (let i = 0; i < array.length; i++) {
                        switch (text_data.plataform[i]) {
                            case "PC":
                                auxP.push(["PC", "fa-brands fa-windows"])
                                break;
                            case "PS":
                                auxP.push(["PS", "fa-brands fa-playstation"])
                                break;
                            case "XBOX":
                                auxP.push(["XBOX", "fa-brands fa-xbox"])
                                break;
                            case "SEGA":
                                auxP.push(["SEGA", "fa-solid fa-gamepad"]
                                )
                                break;
                            case "SWITCH":
                                auxP.push(["SWITCH", "fa-solid fa-gamepad"])
                                break;
                            default:
                                break;
                        }
                    }
                }

                prod.plataform = auxP
                prod.releaseDate = text_data.releaseDate;
                prod.developer = text_data.developer;
                prod.gender = text_data.gender;
                prod.format = text_data.format;
                prod.trailer = text_data.trailer;
                prod.gameplay = gameplay != undefined ? gameplay.path : prod.gameplay;
                switch (text_data.ranking1) {
                    case "PEGI_3":
                        auxR.push(["PEGI_3", "/images/rankings/PEGI_3.png"])
                        break;
                    case "PEGI_7":
                        auxR.push(["PEGI_7", "/images/rankings/PEGI_7.png"])
                        break;
                    case "PEGI_12":
                        auxR.push(["PEGI_12", "/images/rankings/PEGI_12.png"])
                        break;
                    case "PEGI_16":
                        auxR.push(["PEGI_16", "/images/rankings/PEGI_16.png"])
                        break;
                    case "PEGI_18":
                        auxR.push(["PEGI_18", "/images/rankings/PEGI_18.png"])
                        break;
                    default:
                        break;
                }
                switch (text_data.ranking2) {
                    case "ESRB_E":
                        auxR.push(["ESRB_E", "/images/rankings/ESRB_E.svg"])
                        break;
                    case "ESRB_E10":
                        auxR.push(["ESRB_E10", "/images/rankings/ESRB_E10plus.svg"])
                        break;
                    case "ESRB_T":
                        auxR.push(["ESRB_T", "/images/rankings/ESRB_T.svg"])
                        break;
                    case "ESRB_M":
                        auxR.push(["ESRB_M", "/images/rankings/ESRB_M.svg"])
                        break;
                    case "ESRB_AO":
                        auxR.push(["ESRB_A0", "/images/rankings/ESRB_A0.svg"])
                        break;
                    default:
                        break;
                }
                prod.ranking = auxR
            }
        })

        const productJSON = JSON.stringify(BD_provisoria, null, 2);
        const rutaArchivo = './src/Data/BDJson.json';

        fs.writeFile(rutaArchivo, productJSON, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('El archivo JSON ha sido guardado correctamente.');
        });

        res.redirect(`/details/${id}`)
    },
    editProduct_post: (req, res) => {
        const dataPost = req.body
        const caratula = req.files['image-cover'][0]
        const gameplay = req.files['image-gameplay'][0]
        let aux1 = []
        let aux2 = []

        if (typeof (dataPost.plataform) == "string") {
            switch (dataPost.plataform) {
                case "PC":
                    aux1.push(["PC", "fa-brands fa-windows"])
                    break;
                case "PS":
                    aux1.push(["PS", "fa-brands fa-playstation"])
                    break;
                case "XBOX":
                    aux1.push(["XBOX", "fa-brands fa-xbox"])
                    break;
                case "SEGA":
                    aux1.push(["SEGA", "fa-solid fa-gamepad"]
                    )
                    break;
                case "SWITCH":
                    aux1.push(["SWITCH", "fa-solid fa-gamepad"])
                    break;
                default:
                    break;
            }
        }
        else {
            for (let index = 0; index < dataPost.plataform.length; index++) {
                switch (dataPost.plataform[index]) {
                    case "PC":
                        aux1.push(["PC", "fa-brands fa-windows"])
                        break;
                    case "PS":
                        aux1.push(["PS", "fa-brands fa-playstation"])
                        break;
                    case "XBOX":
                        aux1.push(["XBOX", "fa-brands fa-xbox"])
                        break;
                    case "SEGA":
                        aux1.push(["SEGA", "fa-solid fa-gamepad"]
                        )
                        break;
                    case "SWITCH":
                        aux1.push(["SWITCH", "fa-solid fa-gamepad"])
                        break;
                    default:
                        break;
                }
            }
        }

        switch (dataPost.ranking1) {
            case "PEGI_3":
                aux2.push(["PEGI_3", "/images/rankings/PEGI_3.png"])
                break;
            case "PEGI_7":
                aux2.push(["PEGI_7", "/images/rankings/PEGI_7.png"])
                break;
            case "PEGI_12":
                aux2.push(["PEGI_12", "/images/rankings/PEGI_12.png"])
                break;
            case "PEGI_16":
                aux2.push(["PEGI_16", "/images/rankings/PEGI_16.png"])
                break;
            case "PEGI_18":
                aux2.push(["PEGI_18", "/images/rankings/PEGI_18.png"])
                break;
            default:
                break;
        }

        switch (dataPost.ranking2) {
            case "ESRB_E":
                aux2.push(["ESRB_E", "/images/rankings/ESRB_E.svg"])
                break;
            case "ESRB_E10":
                aux2.push(["ESRB_E10", "/images/rankings/ESRB_E10plus.svg"])
                break;
            case "ESRB_T":
                aux2.push(["ESRB_T", "/images/rankings/ESRB_T.svg"])
                break;
            case "ESRB_M":
                aux2.push(["ESRB_M", "/images/rankings/ESRB_M.svg"])
                break;
            case "ESRB_AO":
                aux2.push(["ESRB_A0", "/images/rankings/ESRB_A0.svg"])
                break;
            default:
                break;
        }

        const postData = {
            id: dato.id,
            name: dataPost.name,
            sub_name: dataPost.sub_name,
            description: dataPost.description,
            image: caratula.path,
            price: parseFloat(dataPost.price),
            plataform: aux1,
            releaseDate: dataPost.releaseDate,
            developer: dataPost.developer,
            gender: dataPost.gender,
            format: dataPost.format,
            trailer: dataPost.trailer,
            gameplay: gameplay.path,
            ranking: aux2

        }

        BD_provisoria.push(postData)
        const productJSON = JSON.stringify(BD_provisoria, null, 2);
        const rutaArchivo = './src/Data/BDJson.json';

        fs.writeFile(rutaArchivo, productJSON, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('El archivo JSON ha sido guardado correctamente.');
        });

        console.log(postData)
        res.redirect(`/home`)
    },

    products: (req, res) => {
        for (let i = 0; i < BD_provisoria.length; i++) {
            console.log(BD_provisoria[i].name)
            console.log(BD_provisoria[i].plataform.length + "\n")
        }
        res.render(path.join(__dirname, "../views/products/products.ejs"), { BD: BD_provisoria });
    },
    delete: (req, res) => {
        let id = req.params.id;
        let newBD = BD_provisoria.filter((product) => product.id != id);
        console.log(newBD[1]);
        const newBDJSON = JSON.stringify(newBD, null, 2);
        const jsonPath = path.join(__dirname, '../Data/BDJson.json')
        fs.writeFile(jsonPath, newBDJSON, "utf8", (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("correcto");
        })
        res.redirect('/')
    },
    create: (req, res) => {
        console.log(dato)
        res.render(path.join(__dirname, "../views/products/edit_product.ejs"), { BD: BD_provisoria, prod: dato, method: '' })
    }
}

/* EXPORTS */
module.exports = productController;

