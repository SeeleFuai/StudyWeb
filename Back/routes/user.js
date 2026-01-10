const express = require('express');
const router = express.Router();
const { User } = require('../schema/userschema.js');
const { SignUpUser, loadSighUp, loadLogIn, LoginUser } = require('../controller/userController.js');

const API_BASE_URL = "http://localhost:3000";
router.get('/login',loadLogIn);

router.get('/signup', loadSighUp);

router.get('/ok', async(req,res)=>{
    res.render('user/main');
});


router.post('/login',LoginUser);


router.post('/signup', SignUpUser);

// router.post('/signup',async(req,res)=>{
//     try{
//         const user = new User(req.body);
//         const savedUser = await user.save();
//         res.status(201).json(savedUser);
//     } catch(error){
//         res.status(400).json({message: error.message});
//     }
// });

module.exports = router;