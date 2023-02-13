const User = require("../models/User")

module.exports.home = function (req, res) {

    User.find({}, function (err, data) {
        if (err) {
            console.log("Error while fetching the data!!!")
        } else {
            return res.render('home', {
                title: 'home',
                users: data
            })
        }
    })
}