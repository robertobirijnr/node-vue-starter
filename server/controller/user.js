const User = require("../models/user")


exports.login = (req,res)=>{

}


exports.register = async(req,res)=>{

    const {name,email,password} = req.body

    const user = await User.create({
        name,email,password
    })

    const token = user.generateToken ()

    return res.status(201).json({user,token})
}