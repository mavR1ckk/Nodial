const passport = require('passport');
const LocalStratergy = require('passport-local').Strategy;

passport.use(new LocalStratergy({
        username: 'email'
    },
    function(email, password, done){
        
    }
))