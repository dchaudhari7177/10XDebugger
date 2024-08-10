const express = require('express');
const { adminSigninBody, adminSignupBody } = require('../Validation/valid');
const { Admin } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const router = express.Router();

router.post("/signup",async (req,res)=>{
    try {
        const { success, data, error } = adminSignupBody.safeParse(req.body);
        if (!success) {
            return res.status(400).json({
                err: error.errors,
                message: "Invalid Data | Check Data"
            });
        }

        const { name, email, password } = data;

        
        const isAdminExist = await Admin.findOne({ email });
        if (isAdminExist) {
            return res.status(409).json({
                message: "Admin already exists"
            });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = await Admin.create({
            name,
            email,
            password: hashedPassword
        });

        if (!admin) {
            return res.status(500).json({
                message: "Error while creating admin"
            });
        }

        const adminId = admin._id;
        const token = jwt.sign({ adminId }, JWT_SECRET);

        res.status(201).json({
            message: "Admin Created Successfully",
            token: token
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
})

router.post("/signin", async (req,res)=>{
    try {
        const { success, data, error } = adminSigninBody.safeParse(req.body);
        if (!success) {
            return res.status(400).json({
                err: error.errors,
                message: "Invalid Data | Check Data"
            });
        }

        const { email, password } = data;

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const adminId = admin._id;
        const token = jwt.sign({ adminId }, JWT_SECRET);

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
})

module.exports=router;