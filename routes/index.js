let express = require('express');
let router = express.Router();
const User = require('../model/usercrud');

router.get('/', async function (req, res, next) {

///////////////////////////////////////////////////////////////////////////

  let data = await User.find();          //Find data

/////////////////////////////////////////////////////////////////////////


  let delid = req.query.delid;         //Delete data
  console.log(delid);
 
  if (delid) {
    await User.findByIdAndDelete(delid);
    return res.redirect("/");
  }


////////////////////////////////////////////////////////////////////////////


  let editid = req.query.editid             //Edit data
  console.log(editid)

  if(editid) {
    await User.findByIdAndUpdate(editid);
    // return res.redirect("/");

  }


///////////////////////////////////////////////////////////////////////////

  res.render('index', { title: 'Mongooes crud', data });


});


router.post('/', async function (req, res) {

////////////////////////////////////////////////////////////////////////////


  const { email, password } = req.body             //Create data

  if (email && password) {
    await User.create(req.body)
    return res.redirect('/')
  }


  ///////////////////////////////////////////////////////////////////////////
 

  // if (editid && (email || password)) {
  //   await User.findByIdAndUpdate(editid, { email, password });
  //   return res.redirect('/');
  // }


})

module.exports = router;
