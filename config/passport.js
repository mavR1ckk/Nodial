const passport = require('passport');
const User = require('../models/User');
const LocalStratergy = require('passport-local').Strategy;

//Authhentication by passport
passport.use(new LocalStratergy({
    usernameField: 'email'
},
    function (email, password, done) {
        User.findOne({ email: email }, function (err, user) {
            if (err) {
                console.log("Error in finding user --> passport");
                return done(err);
            }
            if (!user || user.password != password) {
                console.log("Invalid username and password");
                return done(null, false)
            }
            return done(null, user);
        });
    }
));

// seriliaze the user 
passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        if (err) {
            console.log("Error in finding user --> passport");
            return done(err);
        }
        else{
            return done(null, user);
        }
    });
});

passport.checkAuthentication = function(req, res, next){
    if(req.user){
        console.log(req.user);
        return next();
    }

    else{
        console.log('user noot auth');
        return res.redirect('/');
    }
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.user){
        console.log(req.user);
        res.locals.user = req.user;
    }
    else{
        console.log('user noot auth');
        return res.redirect('/');
    }
}

module.exports = passport;