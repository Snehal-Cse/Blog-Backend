const blogModel = require("../models/blog.model");

//get all blogs
exports.getAllBlogs = async()=>{
     try{
       const blogs =  await blogModel.find()  
       return blogs;
     }
     catch(error){
        console.log(error);
        throw error;
     }
}
//get blog
exports.getBlog = async (topic)=>{
    try{
       const blog = await blogModel.findOne({topic: topic});
       return blog
    }
    catch(error){
      console.log(error)
      throw error
    }
}
//create blog

exports.createBlog = async (bgColor,topic,content,about)=>{
    try{
         const newBlog = await blogModel.create({
             bgColor  ,
              topic ,
               content , 
               about  
         })
         return newBlog
    }
    catch(error){
        console.log(error)
        throw error
      }
}


// delete blog

exports.deleteBlog = async (topic)=>{
    try{
    const removedBlog = await blogModel.findOneAndDelete({topic})
    return removedBlog
    }

    catch(error){
        console.log(error)
        throw error
    }
}
