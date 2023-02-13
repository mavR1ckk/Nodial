const express = require('express');
const db = require('./config/mongoose')
const port = 8080;

const app = express();
const partials = require('express-partials')
const expressLayots = require('express-ejs-layouts');
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

app.use(expressLayots);
app.use(express.urlencoded());
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./static'))




app.listen(port, function(err){
    if(err){
        console.log(`Error occured during starting express ${port}`)
    }
    console.log(`Server is started on http://localhost:${port} successfully!!!`);
})