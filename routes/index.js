let express = require('express');
let router = express.Router();
const User = require('../model/usercrud'); 

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express'});

});

router.post('/', function (req, res) {

  const {email, password} = req.body

  if(email && password) {
    User.create(req.body)
    return res.redirect('/')
  }

 
})

module.exports = router;
