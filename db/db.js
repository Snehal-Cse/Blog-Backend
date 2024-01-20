const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://blogs:d3rhmhbO5OZfP6ld@blogdatabase.mjpp57j.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log(" database successfully connected")
})
.catch((error)=>{console.log(error)});
