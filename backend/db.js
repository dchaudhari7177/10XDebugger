const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:bvBSmAb6o15AInRw@cluster0.oopo9qg.mongodb.net/hackaton");

const userSchema=new mongoose.Schema({
    name:String,
    lastName:String,
    phone:Number,
    email:{ type: String, unique: true },
    location:String,
    password:String,
});

const adminSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

const User=mongoose.model("user",userSchema);
const Admin = mongoose.model('Admin', adminSchema);

module.exports={User,Admin}