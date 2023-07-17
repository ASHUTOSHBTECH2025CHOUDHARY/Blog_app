const Blogs=require('../model/Blogmodel')
const User=require('../model/usermodle')

exports.getblogs=async(req,res)=>{
    const blogs=await Blogs.find();
    if(!blogs){
        res.status(200).json({
            message:"NO Blogs found"
        })
    }

    res.status(200).json({
        blogs
    })
}

exports.getblog=async(req,res)=>{
    const blogs=await Blogs.findById(req.params.id);

    res.status(200).json({
        blogs
    })
}

exports.addblog=async(req,res)=>{
    
    const {user}=req.body

    const existinguser=await User.findById(user)
    if(!existinguser){
       return res.status(200).json({
        message:"User not found"
        })
    }
    const blog=await Blogs.create(req.body);
    await existinguser.blogs.push(blog);
    await existinguser.save();
    res.status(200).json({
        blog
    })
}

exports.updateblog=async(req,res)=>{
    const blogs=await Blogs.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:true})

    res.status(200).json({
        blogs
    })
}

exports.deleteblog=async(req,res)=>{
    //deleting blogs and also deleting from user collection
    let blog=await Blogs.findByIdAndRemove(req.params.id).populate('user')

    await blog.user.blogs.pull(blog)
    await blog.user.save()
    // await blog.deleteOne();

    res.status(200).json({
        message:"Blog is deleted"
    })
}

exports.getuserblog=async(req,res)=>{
    // geting all blogs of users
    const userblog=await User.findById(req.params.id).populate('blogs');
    if(!userblog){
        return res.status(200).json({
            message:"user not found"
        })
    }
    res.status(200).json({
        blogs:userblog
    })
}