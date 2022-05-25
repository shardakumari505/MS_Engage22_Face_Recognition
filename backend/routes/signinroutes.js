const express = require('express')
const router = express.Router()
const userTable = require('../models/signupmodels')
const Joi = require("joi")
const bcrypt = require('bcrypt')


router.post('/signin', async (req, res) =>{
    const {email} = req.body;
    var query = {
        email: req.body.email,
        tokenid: {$exists: true, $not: {$size: 0}}
      };
      
      userTable
        .findOne(query)
        .exec(function(err, userTable) {
          
          if(err) { // error happen,
            console.error(err); // log error
            return res.status(500).send({
              success: false,
              message: 'System error'
            }); // respond with 500 status and send json response with success false and message. return will stop execution to go down
          }
  
          if(!userTable) { // response from database was empty or null
            return res.status(404).send({
              success: false,
              message: 'User not found'
            }); // respond with 404 status and send json response with success false and message. return will stop execution to go down
          }

          res.redirect('http://localhost:5000/loggedindashboard/loggedindashboard');
  
          // res.send({
          //   success: true,
          //   tokenid: userTable.tokenid

          // }); // and at last everything is ok, we return json response with success and tokenid in response
        });
});


// router.post('/signin', async (request, response) =>{

//   try{
//     const {error} = validate(request.body);
//     if(error)
//       return response.status(400).send({message:error.details[0].message});
//     const user = await userTable.findOne({email:request.body.email});
//     if(!user)
//       return response.status(401).send({message:"Invalid email or password"});
//     const validPassword = await bcrypt.compare(
//       request.body.password, userTable.password
//     );
//     if(!validPassword)
//       return response.status(400).send({message:"Invalid Email or Password"});
    
//   }
//   catch(error){
//     response.status(500).send({message: "Internal Server Error"})
//   }

// })

// const validate = (data) => {
//   const schema = Joi.object({
//     email:Joi.string.email.required().label("Email"),
//     password:Joi.string().required().label("Password")
//   });
//   return schema.validate(data);
// }

module.exports = router