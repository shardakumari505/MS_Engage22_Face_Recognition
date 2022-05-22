const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodels')
const bcrypt = require('bcrypt')
const res = require('express/lib/response')


router.post('/signup', async (request, response) =>{

    const {fullName, email, password, ConfirmPassword, image} = request.body


    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(password, saltPassword)

    const saltConfirmPassword = await bcrypt.genSalt(10)
    const secureConfirmPassword = await bcrypt.hash(ConfirmPassword, saltConfirmPassword)

    const signedUpUser = new signUpTemplateCopy({
        fullName: fullName,
        email:email,
        password:securePassword,
        ConfirmPassword: secureConfirmPassword,
        image: image
    
    })

    signUpTemplateCopy.find({}, function(error, data){
        const emailexist = data.find(user=> {
            return user.email === email
        })
        if (emailexist){
            response.send('User email already exist')
        }
        else{
            signedUpUser.save()
            .then(data => {
                response.json(data)
            })
            .catch(error =>{
                response.json(error)
            })
        }
    })

})

module.exports = router