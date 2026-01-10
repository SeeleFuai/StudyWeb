const express = require('express');
const router = express.Router();

router.get('/login',async(req,res)=>{
    res.render('admin/login');
    // res.send('this is login page from admin');
});

router.get('/home', async(req,res)=>{
    res.render('admin/home');
});

module.exports = router;

