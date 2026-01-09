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
    
});


router.post('/signup',async(req,res)=>{
  try {
    const user = new SignUp(req.body);
    const savedUser = await user.save();

    res.json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;