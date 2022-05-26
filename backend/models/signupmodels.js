const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity")

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
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
        required:false
    },
    date:{
        type:Date,
        default:Date.now
    }
})

signUpTemplate.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
    return token
};

const Register = mongoose.model('register', signUpTemplate)

const validate = (data) => {
    const schema = Joi.object({
        fullName: Joi.string().required().label("Full Name"),
        email: Joi.string().required().label("Email"),
        password: passwordComplexity().email().required().label("Password"),
        ConfirmPassword: ConfirmPasswordComplexity().required().label("Confirm Password"),
        image: Joi.buffer().required().label("Upload Your Photo")
    });
    return schema.validate(data)
}

module.exports = {Register,validate};