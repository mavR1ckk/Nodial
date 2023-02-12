const User = require('../models/User')


module.exports = {
    deleteUser: deleteUser,
    signUpPage: signUpPage,
    signUp: signUp,
    signIn: signIn
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

function signIn(req, res) {
    var body = req.body;
    User.findOne({ email: body.email }, (err, user) => {
        if (err) {
            console.log("Error While fetching the user from DB");
            return res.redirect('back');
        }
        else {
            if (user.password === body.password) {
                console.log("Log in success!!");
                return res.render('dashboard', {
                    user: user
                });
            }
            else {
                console.log("User not valid!!");
                return res.redirect('back');
            }
        }
    })
}

function signUpPage(req, res, next) {
    return res.render('sign-up');
}

function signUp(req, res) {
    var user = req.body;

    console.log(user);
    console.log("Creating user");

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