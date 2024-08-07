let express = require('express');
let router = express.Router();
const User = require('../model/usercrud');

router.get('/', async function (req, res, next) {

  //------------------------------------------------------------------------------------------

  let data = await User.find();  // Find data

  //------------------------------------------------------------------------------------------

  let delid = req.query.delid;  // Delete data
  console.log(delid);


  if (delid) {
    await User.findByIdAndDelete(delid);
    return res.redirect("/");

  }

  //------------------------------------------------------------------------------------------

  let editid = req.query.editid;  // Edit data
  console.log(editid);


  let input = {};
  console.log(input);


  if (editid) {
    input = await User.findById(editid);  // Find the user by ID

  }

  //------------------------------------------------------------------------------------------

  res.render('index', { title: 'Mongoose CRUD', data, input, editid });

});

//------------------------------------------------------------------------------------------

router.post('/', async function (req, res) {

  const { email, password, inputData } = req.body;  // Create or update data
  console.log(req.body);


  if (email && password) {

    if (inputData) {
      await User.findByIdAndUpdate(inputData, req.body);  // Update user

    }
    else {
      await User.create(req.body);  // Create new user

    }

    return res.redirect('/');
  }

});


module.exports = router;