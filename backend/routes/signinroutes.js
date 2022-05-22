const express = require('express')
const router = express.Router()
const userTable = require('../models/signupmodels')


router.get('/fetch-signindata/:email', async (req, res) =>{
    const {email} = req.params;
    var query = {
        email: req.params.email,
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
  
          res.send({
            success: true,
            tokenid: userTable.tokenid
          }); // and at last everything is ok, we return json response with success and tokenid in response
        });
});


// router.post("/signin", async (request, response) => {

//         const inputemail = request.body.email;
//         const inputpassword = request.body.password;

//         const signinuser = await register.findOne(email);
//         // const isMatch = bcrypt.compare(inputpassword, register.password)

//         if(inputemail === signinuser){
//             response.send("loggedin")
//         } 
//         else{
//         response.status(400).send("invalid all login details")
//     }
// }
// )

module.exports = router