const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost/nodial', (err) => {
    if(err){console.log(err)}
});