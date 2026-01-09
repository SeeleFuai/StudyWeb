const express = require('express');
const router = express.Router();
const SignUp = require('../server');





router.get('/login',async(req,res)=>{
    // res.send('this is login page from user');
    res.render('user/login');
});

router.get('/signup',async(req,res)=>{
    // res.send('this is login page from user');
    res.render('user/signup');
    console.log('this is user signup');
});


router.post('/signup',async (req,res)=>{
  try{
    const newUser = new SignUp(req.body);
    const savenewUser = await newUser.save();
    res.json(savenewUser);
  } catch(error) {
    res.status(400).json({message: error.message})
  }
});

module.exports = router;