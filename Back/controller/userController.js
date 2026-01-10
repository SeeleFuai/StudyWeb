
const { User } = require('../schema/userschema.js');
const API_BASE_URL = "http://localhost:3000";
const bcrypt = require('bcrypt');
const saltround = 10;


const SignUpUser = async (req,res) =>{
    try{
        console.log('this is running')
        const { gmail, password } = req.body;
        const user = await User.findOne({gmail});
        if(user){
           return res.render("user/signup", { message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password,saltround);
        const newUser = new User({ gmail, password: hashedPassword});
        await newUser.save();
        
        // return res.redirect("user/login");
        return res.render("user/login", { message: "Please Login" });
    }   catch(error) {
        console.log(error);
    }
    console.log(req.body);
};

const loadSighUp = async (req,res) =>{
    res.render('user/signup');  
};


const LoginUser = async(req,res)=>{
    try{
        const {gmail,password} = req.body;
        const user = await User.findOne({gmail});
        
        if(!user) return res.render('user/signup', {message: 'User not exist'});

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            console.log('password incorrect');
            return res.render('user/login',{message:'password incorrect'})
        } 
        res.render('user/main',{message: 'Login ok'});
    
    
    }   catch(error){
        res.status(400).json({message: error.message});
    }
}
const loadLogIn = async (req,res) =>{
    res.render('user/login');  
};





module.exports = {SignUpUser,loadLogIn,loadSighUp,LoginUser};


// try{
//     const user = new User(req.body);
//     const savedUser = await user.save();
//     res.status(201).json(savedUser);
// } catch(error){
//     res.status(400).json({message: error.message});
// }