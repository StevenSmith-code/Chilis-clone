const mongoose = require('mongoose')
const LoginSchema = new mongoose.Schema({

    phoneNumber:{
        type:String,
        required:[true, "please add phone number"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "please add password"]
    }
})

module.exports = mongoose.models.Login || mongoose.model("Login", LoginSchema)