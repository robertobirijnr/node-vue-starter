const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    createdAt:Date,
    updatedAt:Date,
    password:String,
    emailConfirmAt:Date,
    emailConfirmAtCode:String
});

module.exports = mongoose.model('user',userSchema)