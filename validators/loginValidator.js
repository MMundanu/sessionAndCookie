const {check} = require('express-validator');

module.exports = [
    check('name')
              .notEmpty().withMessage('El nombre es obligatorio'),
    
    check('email')
              .notEmpty().withMessage('El email es obligatorio').bail()
              .isEmail().withMessage('Debe ser un email válido'),
    
    check('color')
              .notEmpty().withMessage('El color debe ser obligatorio'),
            
    check('edad')
              .notEmpty().withMessage('La edad es obligatorio').bail()
              .isNumeric({
                no_symbols : true,
            }).withMessage('Debe ser un dato valido')

              
]