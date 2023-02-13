const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost/nodial', (err, data) => {
    if(err){console.log(err)} 
    else console.log("Connected to MongoDb");
});