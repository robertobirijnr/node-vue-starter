const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const randomString = require('randomstring')
const Mail = require("@fullstackjs/mail")
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    createdAt:Date,
    updatedAt:Date,
    password:String,
    emailConfirmAt:Date,
    emailConfirmCode:String
});

//harshing user password
userSchema.pre('save',function(){
    this.password = bcrypt.hashSync(this.password)
    this.emailConfirmCode = randomString.generate(72)

    this.createdAt = new Date
})

//sending email confirmation to user
userSchema.post('save', async function(){
 await new Mail('confirm-account')
    .to(this.email, this.name)

    .subject('Please confirm your account')

    .data({
        name:this.name,
        url: `${process.env.APP_URI}/user/emails/confirm/${this.emailConfirmCode}`
    })

    .send()

})

userSchema.methods.generateToken = function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRETE )
}

module.exports = mongoose.model('user',userSchema)