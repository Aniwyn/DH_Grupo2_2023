const path = require("path")
const fs = require("fs")
const filePathProduct = path.join(__dirname, "/product.json")
const filePathUsers = path.join(__dirname, "/users.json")

let product = JSON.parse(fs.readFileSync(filePathProduct, "utf-8"))
let users = JSON.parse(fs.readFileSync(filePathUsers, "utf-8"))

const dato = {
    id: product[product.length - 1].id + 1,
    name: "",
    second_name: "",
    description_1: "",
    description_2: "",
    description_3: "",
    description_4: "",
    cover_image: "",
    price: 0,
    platforms: [
        [
            "",
            ""
        ]
    ],
    releaseDate: "2000-01-01",
    developer: "",
    genres: [
        "",
        ""
    ],
    format: "",
    trailer: "",
    gameplay_image: "",
    rating_esrb: ['',''],
    rating_pegi: ['','']
}


module.exports = { 
    product,
    dato,
    users 
    };




