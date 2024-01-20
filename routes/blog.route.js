const blogController = require('../controllers/blog.controller');
module.exports = (app)=>{
      app.get('/blogs', blogController.getAllBlogs);
      app.get('/blog/:topic', blogController.getBlog);
      app.post('/blog', blogController.createBlog);
      app.delete('/blog',blogController.deleteBlog);
}



