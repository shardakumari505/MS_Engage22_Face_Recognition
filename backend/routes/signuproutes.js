const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodels')
const bcrypt = require('bcrypt')
const res = require('express/lib/response')

router.post('/signup', async (request, response) =>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const saltConfirmPassword = await bcrypt.genSalt(10)
    const secureConfirmPassword = await bcrypt.hash(request.body.ConfirmPassword, saltConfirmPassword)

    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        email:request.body.email,
        password:securePassword,
        ConfirmPassword:secureConfirmPassword,
        image:request.body.image
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router