const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodels')
const bcrypt = require('bcrypt')
const {Register, validate} = require("../models/signupmodels")
const res = require('express/lib/response')
const { request } = require('express')


// router.post('/signup', async (request, response) =>{

//     const {fullName, email, password, ConfirmPassword, image} = request.body


//     const saltPassword = await bcrypt.genSalt(10)
//     const securePassword = await bcrypt.hash(password, saltPassword)

//     const saltConfirmPassword = await bcrypt.genSalt(10)
//     const secureConfirmPassword = await bcrypt.hash(ConfirmPassword, saltConfirmPassword)

//     const signedUpUser = new signUpTemplateCopy({
//         fullName: fullName,
//         email:email,
//         password:securePassword,
//         ConfirmPassword: secureConfirmPassword,
//         image: image
    
//     })

//     signUpTemplateCopy.find({}, function(error, data){
//         const emailexist = data.find(user=> {
//             return user.email === email
//         })
//         if (emailexist){
//             response.send('User email already exist')
//         }
//         else{
//             signedUpUser.save()
//             .then(data => {
//                 response.json(data)
//             })
//             .catch(error =>{
//                 response.json(error)
//             })
//         }
//     })

// })

// module.exports = router

router.post("/signup", async(req,res) => {
    try{
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message:error.details[0].message});

        const register = await Register.findOne({email:req.body.email});
        if(register)
            return res.status(409).send({message:"Usr with given email already exist"})
        
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        await new Register({...req.body, password:hashPassword}).save();
        res.status(201).send({message: "User created successfully"})
    }
    catch(error){
        res.status(500).send({message: "Internal Server Error"})
    }
})

module.exports = router;