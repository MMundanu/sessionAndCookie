var express = require('express');
var router = express.Router();
const{index, processAccess, acceso, edit, processEdit, logout} = require('../controllers/indexControllers')
const loginValidator = require('../validators/loginValidator')
const localsUserCheck = require('../middlewares/localsUserCheck');
const userSessionCheck = require('../middlewares/userSessionCheck');
const userActive = require('../middlewares/userActive')


/* GET home page. */
router
      .get('/',userActive, index)
      .post('/',loginValidator, processAccess)
      .get('/acceso',userSessionCheck,localsUserCheck, acceso)
      .get('/edit',userSessionCheck,localsUserCheck, edit)
      .post('/edit',loginValidator, processEdit )
      .get('/logut', logout)

module.exports = router;
