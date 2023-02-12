const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/nodial', (err, data) => {
    if(err){console.log(err)} 
    else console.log("Connected to MongoDb");
});


