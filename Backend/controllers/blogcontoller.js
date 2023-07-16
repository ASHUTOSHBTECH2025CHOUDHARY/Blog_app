const Blogs=require('../model/Blogmodel')

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

exports.addblog=async(req,res)=>{
    
    const blogs=await Blogs.create(req.body);

    res.status(200).json({
        blogs
    })
}