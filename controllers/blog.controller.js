const blogServices = require('../services/blog.service');

exports.getAllBlogs = async (req,res) =>{
    try{
       const blogs = await blogServices.getAllBlogs()
       return res.send({message:"blogs displayed successfully",blogs})
    }
    catch(error){
      console.log("the error is detected");
      return res.status(500).send({message:"error while displaying the blogs", error});
    }
}

exports.getBlog = async (req,res)=>{
    try{
        const blog = await blogServices.getBlog(req.params.topic)
        return res.send({message:"blog displayed successfully",blog})
    }

catch(error){
    console.log("the error is detected ")
    return res.status(500).send({message:"error while displaying the blog", error});
}
}

exports.createBlog = async (req,res)=>{
    try{
         const newBlog = await blogServices.createBlog(req.body.bgColor,req.body.topic, req.body.content,req.body.about)
         return res.send({message:"blog created successfully",newBlog})
    }
    catch(error){
     console.log("the error is detected")
     return res.status(500).send({message:"error while creating blog",error});
    }
}

exports.deleteBlog = async (req,res)=>{
    try{
         const removeBlog = await blogServices.deleteBlog(req.body.topic)
         return res.send({message:"blog deleted successfully",removeBlog})
    }
    catch(error){
     console.log("the error is detected")
     return res.status(500).send({message:"error while deleting blog",error});
    }
}
