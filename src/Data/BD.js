const path = require("path")
const fs = require("fs")
const filePathProduct = path.join(__dirname, "/product.json")
const filePathUsers = path.join(__dirname, "/users.json")

let product = JSON.parse(fs.readFileSync(filePathProduct, "utf-8"))
let users = JSON.parse(fs.readFileSync(filePathUsers, "utf-8"))

const dato = {
    id: product[product.length - 1].id + 1,
    name: "",
    sub_name: "",
    description: [
        "",
        "",
        ""
    ],
    image: "",
    price: 0,
    platform: [
        [
            "",
            ""
        ]
    ],
    releaseDate: "2000-01-01",
    developer: "",
    genre: [
        "",
        ""
    ],
    format: "",
    trailer: "",
    gameplay: "",
    ranking: [
        [
            "",
            ""
        ],
        [
            "",
            ""
        ]
    ]
}


module.exports = { 
    product,
    dato,
    users 
    };




