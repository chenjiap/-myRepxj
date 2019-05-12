
const mongoose = require('mongoose')

const userSchma = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    }


})
module.exports = mongoose.model('users',userSchma)












