const { body } = require('express-validator')

const validateRegisterForm = [
    body('name')
        .notEmpty().withMessage('Este campo es obligatorio.').bail()
        .isAlpha().withMessage('Debe contener solo letras.').bail()
        .isLength({min: 3, max: 20}).withMessage('Debe contener entre 3 y 20 caracteres.').bail(),
    body('userName')
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isAlphanumeric().withMessage('Debe contener solo letras y números.').bail()
        .isLength({min: 3, max: 20}).withMessage('Debe contener entre 3 y 20 caracteres.').bail(),
    body('email')
        .notEmpty().withMessage('Este campo es obligatorio.').bail()
        .isEmail().withMessage('Debe ingresar un email valido.').bail(),
    body('password')
        .notEmpty().withMessage('Este campo es obligatorio.').bail()
        .isLength({min: 6, max: 50}).withMessage('Debe tener al menos 6 caracteres.').bail()
        .matches(/\d/).withMessage('Debe tener letra minúscula, una letra mayúscula y un número.').bail()
        .matches(/[a-z]/).withMessage('Debe tener una letra minúscula, una letra mayúscula y un número.').bail()
        .matches(/[A-Z]/).withMessage('Debe tener una letra minúscula, una letra mayúscula y un número.').bail(),
    body('password_repeat')
        .notEmpty().withMessage('Este campo es obligatorio.').bail()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
              throw new Error('Las contraseñas no coinciden');
            }
            return true;
        }).withMessage('Las contraseñas no coinciden.').bail()

]

module.exports = validateRegisterForm