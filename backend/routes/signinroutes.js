const express = require('express')
const router = express.Router()
const userTable = require('../models/signupmodels')


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

          res.redirect('http://localhost:5000/transactionpage');
  
        });
});



module.exports = router