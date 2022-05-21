const mongoose = require('mongoose')

const ePayTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    bankName:{
        type:String,
        required:true
    },
    accountNumber:{
        type:String,
        required:true
    },
    ifscCode:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('bank_details', ePayTemplate)