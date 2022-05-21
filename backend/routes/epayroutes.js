const express = require('express')
const router = express.Router()
const ePayTemplateCopy = require('../models/epaymodels')
const bcrypt = require('bcrypt')
const res = require('express/lib/response')

router.post('/transactionpage', async (request, response) =>{

    const saltAccountNumber = await bcrypt.genSalt(10)
    const secureAccountNumber = await bcrypt.hash(request.body.accountNumber, saltAccountNumber)

    const saltIfscCode = await bcrypt.genSalt(10)
    const secureIfscCode = await bcrypt.hash(request.body.ifscCode, saltIfscCode)

    const epayUser = new ePayTemplateCopy({
        fullName:request.body.fullName,
        bankName:request.body.bankName,
        accountNumber:secureAccountNumber,
        ifscCode:secureIfscCode
    })
    epayUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router