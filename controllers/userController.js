const User = require('../models/User')

module.exports.user = function (req, res) {
    var userData = {
        name: 'asfsf',
        phone: '9503698655',
        email: 'afdfg@gmail.com'
    }

    User.create(userData, function (err, data) {
        if (err) {
            console.log("Error while storing data!!! : " + err);
            return res.redirect('back');
        }
        else {
            console.log(data);
            return res.redirect('back');
        }
    });
}

module.exports.deleteUser = function (req, res) {

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

module.exports.signIn = (req, res) => {
    var body = req.body;
    User.findOne({ name: body.email }, (err, user) => {
        if (err) {
            console.log("Error While fetching the user from DB");
            return res.redirect('back');
        }
        else {
            if (user.password === body.password) {
                return res.redirect('dashboard', {user});
            }
            else {
                console.log("User not valid!!");
                return res.redirect('back');
            }
        }
    })
}

module.exports.signUpPage = (req, res) =>{
    return res.render('sign-up');
}

module.exports.signUp = (req, res) => {
    var user  = req.body;

    console.log(user);
    console.log("Creating user");

    User.create(user, (err, data)=>{
        if(err){
            console.log(`Error while creating user : ${user.email} Error: ${err}`);
            return res.redirect('back');
        }
        else{
            console.log(`User Created ${data.id}`);
            return res.render('dashboard', {
                user: data
            });
        }
    })
}