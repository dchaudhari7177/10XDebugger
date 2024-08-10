const express = require('express');
const { User } = require('../db');
const { userSignupBody } = require('../Validation/valid');
const { userSigninBody } = require('../Validation/valid');
const router = express.Router();
const jwt = require("jsonwebtoken");
const {JWT_SERCET}=require("../config");
const bcrypt = require('bcrypt');
const sendMailNotification = require('../sendMail');
const { default: axios } = require('axios');


router.post("/signup",async (req,res)=>{
    const {success}=userSignupBody.safeParse(req.body);
    if(!success){
       return res.json({
        err:success,
        message:"Invalid Data | Check Data"
        })
    }
    const {name,lastName,email,phone,location,password}=req.body;
    const isUserExist= await User.findOne({email,phone});
    if(isUserExist){
        return res.json({
            message:"User already exits"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        lastName,
        email,
        phone,
        location,
        password:hashedPassword
    })

    if(!user){
        return res.json({
            message:"Error while creating user"
        })
    }

    const userId=user._id;   
    const token = jwt.sign({ userId }, JWT_SECRET);
    res.json({
        message: "User Created Successfully",
        token: token
    })
});

router.post("/signin", async (req, res) => {
    try {
        const { success, data, error } = userSigninBody.safeParse(req.body);
        if (!success) {
            return res.status(400).json({
                err: error.errors,
                message: "Invalid Data | Check Data"
            });
        }

        const { email, phone, password } = data;   
        const user = await User.findOne({
            $or: [{ email }, { phone }]
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const userId = user._id;
        const token = jwt.sign({ userId }, JWT_SECRET);

        res.status(200).json({
            message: "Sign-in successful",
            token: token
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

router.get("/xx",async (req,res)=>{
    // await sendMailNotification("prathameshkothalkar9021@gmail.com","sfghgfhg");
    // res.send("sended");
    try{
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: 'PUNE', // Replace with your city or location
                appid: '498295b20f96fcb697093ffec40b9c6f' // Replace with your weather API key
            }
        });
        console.log(response.data);
    }
    catch(e){
        console.log(e)
    }
   

})




module.exports = router;