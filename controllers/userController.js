const User = require('../models/User');
const utility = require('../utility/utility');


module.exports = {
    deleteUser: deleteUser,
    signUpPage: signUpPage,
    signUp: signUp,
    profilePage: profilePage,
    errorPage: errorPage,
    signInPage:signInPage
}

function deleteUser(req, res) {

    var id = req.query.id;

    User.findByIdAndDelete(id, function (err, response) {
        if (err) {
            console.log(`Error while deleting user with ID : ${id} : ${err}`);
        }
        else {
            return res.redirect('back');
        }
    })
}

function signUpPage(req, res, next) {
    if(req.isAuthenticated()){
        return res.redirect('/user/profile');
    }
    return res.render('sign-up');
}

function signUp(req, res) {
    var user = req.body;
    User.findOne({ email: user.email }, (err, userDB) => {
        if (userDB) return res.status(400).redirect('back');
        else {
            user.username = user.email;
            User.create(user, (err, data) => {
                if (err) {
                    console.log(`Error while creating user : ${user.email} Error: ${err}`);
                    return res.redirect('back');
                }
                else {
                    console.log(`User Created ${data.id}`);
                    return res.render('dashboard', {
                        user: data
                    });
                }
            })
        }
    });
}

function profilePage(req, res) {
    utility.setAuthenticated(req,res);
    res.render('dashboard', {
        name: 'login success'
    })
}

function errorPage(req, res) {
    res.render('errorPage');
}

function signInPage(req, res) {
    if(req.isAuthenticated()){
        return res.redirect('/user/profile');
    }
    res.render('sign_in');
}