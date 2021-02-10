const User = require("../models/user")


exports.login = async(req,res)=>{
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user){
        if(user.comparePasswords(password)){
            const token = user.generateToken()

            return res.json({
                user,
                token
            })

        }
    }

    return res.status(400).json({
        error:"These credentials do not match our records"
    })
}


exports.register = async(req,res)=>{

    const {name,email,password} = req.body

    const user = await User.create({
        name,email,password
    })

    const token = user.generateToken ()

    return res.status(201).json({user,token})
}




exports.forgotPassword = async (req,res)=>{
    const {email} = req.body 

    const user = await User.findOne({email})
    if (!user) return res
    .status(401)
    .json({error: 'user with this email does not exist'});

    
    await user.generatePasswordReset()

    return res
        .status(200)
        .json({
        message:'password reset link sent'
    })
}