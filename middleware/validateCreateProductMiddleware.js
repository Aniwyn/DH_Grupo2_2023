const { body } = require('express-validator')

const validateCreateProductForm = [
    body('name')
        .notEmpty().withMessage('Este campo es obligatorio AAAAA').bail()
        .isLength({min: 3, max: 50}).withMessage('Debe contener entre 3 y 50 caracteres.').bail()
         ,
     body('releaseDate')
         .notEmpty().withMessage('Este campo es obligatorio BBBBBB').bail()
         .isDate('YYYY-MM-DD').withMessage('La fecha introducida no es valida').bail()
]

module.exports = validateCreateProductForm

/* id
name
sub_name
format
platform
releaseDate
developer
genre
ranking1
ranking2
price
image-cover
image-gameplay
trailer
description[0]
description[1]
description[2]
description[3]


*/
