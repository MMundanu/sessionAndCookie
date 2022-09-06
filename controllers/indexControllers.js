const {validationResult} = require('express-validator');
const localsUserCheck = require('../middlewares/localsUserCheck');
const userSessionCheck = require('../middlewares/userSessionCheck');

module.exports = {
    index : (req, res) => {
        res.render('index')
    },
    processAccess : (req,res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()){
            const {name, color, email, edad} = req.body;
            req.session.userLogin = {
                name,
                color,
                email,
                edad
            }
            
            if(req.body.remember){
                res.cookie('form',req.session.userLogin,{
                    maxAge : 1000 * 120
                })
            }

            return res.redirect('acceso')
        } else {
            res.render('index', {
                errors : errors.mapped(),
                old : req.body
            })
        }
    },
    acceso : (req, res) =>{
        res.render('acceso', {
            user : res.locals.userLogin
        })
    },
    edit : (req, res) => {
        res.render('edit', {
            user : res.locals.userLogin
        })
    },
    processEdit : (req, res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const {name, color, email, edad} = req.body;
            req.session.userLogin = {
                name,
                color,
                email,
                edad
            }

            return res.redirect('acceso')
        } else {
            res.render('index', {
                errors : errors.mapped(),
                old : req.body
            })
        }

    },
    logout : (req,res) => {
        req.session.destroy()
        return res.redirect('/')
    }
}