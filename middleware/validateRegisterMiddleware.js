const path = require('path')
const {body} = require('express-validator')

const validateRegisterForm = [
    body('').notEmpty().withMessage('Debes completar el campo del nombre'),
    body(''),
    body('')
]
