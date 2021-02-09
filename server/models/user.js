const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const randomString = require('randomstring')


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    createdAt:Date,
    updatedAt:Date,
    password:String,
    emailConfirmAt:Date,
    emailConfirmCode:String
});

userSchema.pre('save',function(){
    this.password = bcrypt.hashSync(this.password)
    this.emailConfirmCode = randomString.generate(72)

    this.createdAt = new Date
})

module.exports = mongoose.model('user',userSchema)