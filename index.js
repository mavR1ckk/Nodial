const express = require('express');
const db = require('./config/mongoose')

const app = express();
const port = 8080;

app.use(express.urlencoded());
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./static'))


app.listen(port, function(err){
    if(err){
        console.log(`Error occured during starting express ${port}`)
    }
    console.log(`Server is started on port: ${port} successfully!!!`);
})