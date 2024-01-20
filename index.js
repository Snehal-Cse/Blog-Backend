require('./db/db');
const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("hello world")
})
require('./routes/blog.route')(app)
app.listen(3001,()=>{
    console.log("the server has started");
})