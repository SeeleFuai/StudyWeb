const express = require('express');
const router = express.Router();

router.get('/login',async(req,res)=>{
    res.render('admin/login');
    // res.send('this is login page from admin');
});

router.get('/signup',async(req,res)=>{
    // res.send('this is signup page from admin');
    res.render('admin/signup')
});

module.exports = router;

