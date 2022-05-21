const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    ConfirmPassword:{
        type:String,
        required:true
    },
    image:{
        type:Buffer,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('register', signUpTemplate)