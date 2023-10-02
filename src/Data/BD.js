const path = require("path")
const fs = require("fs")
const filePath = path.join(__dirname, "/product.json")

let product = JSON.parse(fs.readFileSync(filePath, "utf-8"))

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
    plataform: [

        [
            "",
            ""
        ]
    ],
    releaseDate: "2000-01-01",
    developer: "",
    gender: [
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


module.exports = { product, dato };




