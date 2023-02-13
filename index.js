const express = require('express');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser')
// For authentication and cookies
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport')

const partials = require('express-partials');
const expressLayots = require('express-ejs-layouts');
const port = 8080;
const app = express();

// To setup static and layouts
app.use(express.static('./static'));
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.use(expressLayots);
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');

const secret = 'SecrteKey'


// to setup cookies
app.use(session({
    name: 'nodial',
    secret: secret,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());    

// To run server
app.listen(port, function (err) {
    if (err) {
        console.log(`Error occured during starting express ${port}`);
    }
    console.log(`Server is started on http://localhost:${port} successfully!!!`);
})