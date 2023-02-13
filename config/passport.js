const User = require('../models/User');

const LocalStratergy = require('passport-local').Strategy;

module.exports.initializingPassport = (passport) => {

    // Local stratergy
    passport.use(new LocalStratergy((username, password, done) => {

        User.findOne({ username: username }, (err, userDb) => {
            if (!userDb) return done(null, false);

            if (userDb.password !== password) return done(null, false);

            return done(null, userDb);
        });

    }));

    passport.serializeUser(function (user, done) {
        done(null, user._id);
        // where is this user.id going? Are we supposed to access this anywhere?
    });

    passport.deserializeUser(function (id, done) {

        User.findById(id, function (err, user) {
            done(null, user);
        });

    });
}

module.exports.checkAuthentication = (req, res, next) =>{
    if(req.isAuthenticated()) {
        //req.isAuthenticated = true;
        return next();
    }
    res.redirect('/');
}

module.exports.setAuthenticated = (req, res) => {
    if(req.isAuthenticated()) {
        res.locals.user = req.user;
    }
}