
// imports required packages
const express = require('express');
const db = require('./config/mongoose')
const partials = require('express-partials')
const expressLayots = require('express-ejs-layouts');
const passport = require('passport');
const { initializingPassport } = require('./config/passport');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');
const port = 8080;
const app = express();

// passport configue
initializingPassport(passport);

// mongo store to store cookie
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressSession(
    {
        secret: 'SecretKey',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: (100*60*100)
        },
        store: MongoStore.create(
            {
                mongoUrl: 'mongodb://localhost/nodial',
                autoRemove: 'enabled'
            },
            (err)=>{
                console.log(err || 'Connected mongoStore Ok');
            }
        )
    }
));
app.use(passport.initialize());
app.use(passport.session());

// Layout and routes
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.use(expressLayots);
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./static'));

// Authentication and requst handler
app.use('/', require('./routes'));



app.listen(port, function (err) {
    if (err) {
        console.log(`Error occured during starting express ${port}`)
    }
    console.log(`Server is started on http://localhost:${port} successfully!!!`);
})