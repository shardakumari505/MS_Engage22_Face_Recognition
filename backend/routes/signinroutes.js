const express = require('express')
const router = express.Router()
const register = require('../models/signupmodels')
const bcrypt = require('bcrypt')
// const { findOne } = require('../models/signupmodels')

router.get("/signin", (request, response) => {
    response.json({
        database: register,
    


})

})
router.post("/signin", async (request, response) => {
    try {

        const inputemail = request.body.inputemail;
        const password = request.body.password;

        const signinuser = await register.findOne({email:inputemail});
        const isMatch = bcrypt.compare(password, signinuser.password)

        if(isMatch){
            response.send("loggedin")
            window.location = '/loggedindashboard'
        } else{
            response.send("invalid login details");
        }
    }
    catch (err) {
        response.status(400).send("invalid all login details")
    }
})

module.exports = router