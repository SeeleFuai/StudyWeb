const express = require('express');
const router = express.Router();
const { User } = require('../schema/userschema.js');

router.get('/login',async(req,res)=>{
    // res.send('this is login page from user');
    res.render('user/login');
});

router.get('/signup',async(req,res)=>{
    // res.send('this is login page from user');
    res.render('user/signup');
    
});

router.post('/login',async(req,res)=>{
    // tim kiem nguoi dung
    const user = User.find({ gmail: req.body.gmail, password: req.body.password });
    console.log(user);
    // gui l
    
});


router.post('/signup',async(req,res)=>{
    // luu thong tin nguoi dung OK
    const user = new User({ gmail: req.body.gmail, password: req.body.password });
    const savedUser = await user.save();
    // tra lai ket qua nguoi dung
    res.json(savedUser); // cai nay la duoc roi
});

module.exports = router;
//test lai