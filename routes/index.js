let express = require('express');
let router = express.Router();
const User = require('../model/usercrud');

router.get('/', async function (req, res, next) {

  let data = await User.find();

  let delid = req.query.delid;
  console.log(delid);

  if (delid) {
    await User.findByIdAndDelete(delid);
    return res.redirect("/");
  }


  // let editid = req.query.editid;
  // console.log(editid);



  res.render('index', { title: 'Mongooes crud', data  });


});


router.post('/', async function (req, res) {

  const { email, password } = req.body
 

  if (email && password) {
    await User.create(req.body)
    return res.redirect('/')
  }

  // if (editid && (email || password)) {
  //   await User.findByIdAndUpdate(editid, { email, password });
  //   return res.redirect('/');
  // }



})

module.exports = router;
