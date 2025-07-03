const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        resume:String,
    },
    password:{
        type:String,
        required:true,
    },
    github:String,
    linkedin:String,
    portfolio:String,
    resume:String,
},{timestamps:true});

module.exports = mongoose.model('User', userSchema); 