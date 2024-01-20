const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    bgColor:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    },
    about:{
        type:String,
        required: true
    }
});
module.exports = mongoose.model('Blog',blogSchema);
