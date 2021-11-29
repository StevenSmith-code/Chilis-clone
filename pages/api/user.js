const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    password:{
        type:String,
        required:[true, "please add your password"]
    },
    email:{
        type:String,
        required:[true, "please add your email"]
    },
    birthdayDay:{
        type:Number,
        enum:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        required:[true, "please add the day of the month"]
    },
    birthdayMonth:{
        type:String,
        enum:['January',"February","March","April","May","June","July","August","September","October","November","December"],
        required:[true, "please add your birth month"]
    },
    phoneNumber:{
        type: String,
        required:[true, "please add your phone number"],
    },
    lastName:{
        type: String,
        required: [true, 'please add your last name!']
    },
    firstName:{
        type: String,
        required: [true, 'please add your first name'],
        unique: false,
    }
})

module.exports= mongoose.models.User || mongoose.model("User", UserSchema)