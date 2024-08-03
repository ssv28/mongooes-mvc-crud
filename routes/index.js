let express = require('express');
let router = express.Router();
const User = require('../model/usercrud'); 

router.get('/',async function (req, res, next) {
  let data = await User.find()
  res.render('index', { title: 'Express' , data});

});

router.post('/',async function (req, res) {

  const {email, password} = req.body

  if(email && password) {
    await User.create(req.body)
    return res.redirect('/')
  }

 
})

module.exports = router;
