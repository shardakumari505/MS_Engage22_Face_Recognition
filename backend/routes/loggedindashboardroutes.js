const express = require('express')
const router = express.Router()


router.get('/loggedindashboard', async (req, res) =>{
    res.send("Loggedin Page")
});

router.post('/loggedindashboard', async (req, res) =>{
    res.send("Loggedin Page")
});

module.exports = router