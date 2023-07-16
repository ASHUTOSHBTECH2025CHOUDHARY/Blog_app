const User=require('../model/usermodle');
const bcrypt=require('bcryptjs')

exports.getallusers=async(req,res)=>{
    const user=await User.find();
    if(!user){
        return res.status(200).json({
            message:"No users found"
        })
    }

    res.status(200).json({
        user
    })
}

exports.signup=async(req,res,next)=>{

    const {name,email,password}=req.body;

    const existinguser=await User.findOne({email});
    // console.log(user);

    if(existinguser){
        return res.status(200).json({message:"Email is already register"})
    }
    
    const hasedpassword=bcrypt.hashSync(password)

    const user =new User({
        name,
        email,
        password:hasedpassword
    })

    try {
        await user.save()
    } catch (error) {
        console.log(error)
    }
    res.status(200).json({
        user
    })
}

exports.login=async(req,res)=>{
    const {email,password}=req.body;

    const existinguser=await User.findOne({email}).select("+password");;

    if(!existinguser){
        return res.status(200).json({message:"Please register Yourself"})
    }

    const ispassword=bcrypt.compareSync(password,existinguser.password)

    if(!ispassword){
        return res.status(200).json({message:"Incorrect Password"})
    }

    res.status(200).json({
        messsage:"Login Successfull"
    })
}