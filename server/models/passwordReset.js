const mongoose = require('mongoose')


const PasswordResetSchema = new mongoose.Schema({
    email: { 
        type: String,
        required: 'Email is Required',
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    token: String,
    createdAt: { type: Date, default: Date.now },
})


module.exports = mongoose.model('passwordReset',PasswordResetSchema)