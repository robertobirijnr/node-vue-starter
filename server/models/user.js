const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const randomString = require('randomstring')
const Mail = require("@fullstackjs/mail")
const jwt = require('jsonwebtoken')
const ResetPassword = require('./passwordReset')


const userSchema = new mongoose.Schema({

    name: { type: String,
        required: true,
        minlength: [6, 'Too short, min is 6 characters']
       },

        email: { type: String,
            required: 'Email is Required',
            lowercase: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
        },

        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        password: {
            type: String,
            minlength: [4, 'Too short, min is 4 characters'],
            maxlength: [32, 'Too long, max is 32 characters'],
            required: 'Password is required'
          },
    emailConfirmAt:{ type: Date, default: Date.now },
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

//Generating token
userSchema.methods.generateToken = function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRETE )
}

//compare password
userSchema.methods.comparePasswords = function(plainPassword){
    return bcrypt.compareSync(plainPassword, this.password)
}

//generate password reset token
userSchema.methods.generatePasswordReset = async function(){
  const token = randomString.generate(72)

  await ResetPassword.create({
      token,
      email:this.email,
      createdAt: new Date
  })

  await new Mail('forgot-password')
        .to(this.email, this.name)
        .subject('password reset')
        .data({
            url: `${process.env.APP_URI}/user/forgotpassword/reset/${token}`,
            name:this.name
        })
        .send()
}
module.exports = mongoose.model('user',userSchema)