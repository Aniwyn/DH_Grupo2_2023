const { body } = require('express-validator')

const validateCreateProdutForm = [
    body('name')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({min: 3, max: 50}).withMessage('Debe contener entre 3 y 50 caracteres.').bail(),
    body('sub_name')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({min: 3, max: 30}).withMessage('Debe contener entre 3 y 30 caracteres.').bail(),
    body('format')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({min: 3, max: 40}).withMessage('Debe contener entre 3 y 40 caracteres.').bail(),
    body('platform')
        .notEmpty().withMessage('Este campo es obligatorio').bail(),
    body('releaseDate')
        .notEmpty().withMessage('Este campo es obligatorio').bail(),
    body('developer')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({min: 3, max: 40}).withMessage('Debe contener entre 3 y 40 caracteres.').bail(),
    body('genre')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({min: 3, max: 40}).withMessage('Debe contener entre 3 y 40 caracteres.').bail(),
    body('ranking1')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({min: 3, max: 40}).withMessage('Debe contener entre 3 y 40 caracteres.').bail(),
    body('ranking2')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({min: 3, max: 40}).withMessage('Debe contener entre 3 y 40 caracteres.').bail(),
    body('price')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isNumeric().withMessage('Debe contener solo números.').bail(),
    // body('files["image-cover"]')
    //     .notEmpty().withMessage('Este campo es obligatorio').bail()
    //     .isLength({min: 3, max: 40}).withMessage('Debe contener entre 3 y 80 caracteres.').bail(),
    // body('image-gameplay')
    //     .notEmpty().withMessage('Este campo es obligatorio').bail()
    //     .isLength({min: 3, max: 40}).withMessage('Debe contener entre 3 y 80 caracteres.').bail(),
    body('trailer')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isURL().withMessage('Debe contener una URL').bail()
        .isLength({min: 3, max: 50}).withMessage('Debe contener entre 3 y 50 caracteres.').bail(),
    body('description[0]')
        .notEmpty().withMessage('Este campo es obligatorio').bail(),
    body('description[1]')
        .notEmpty().withMessage('Este campo es obligatorio').bail(),
    body('description[2]')
        .notEmpty().withMessage('Este campo es obligatorio').bail(),
    body('description[3]')
        .notEmpty().withMessage('Este campo es obligatorio').bail(),
]

module.exports = validateCreateProdutForm 