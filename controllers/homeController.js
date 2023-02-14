const Post = require("../models/Post");
const User = require("../models/User")
const utility = require('../utility/utility');

module.exports.home = function (req, res) {

    if (req.isAuthenticated()) {
        res.locals.user = req.user;

        Post.find({}).populate('user').exec((err, posts) => {
            console.log(posts[1].user);
            return res.render('home', {
                posts: posts
            });
        });
    }
    else{
        return res.render('home', {
            posts: new Array(0)
        });
    }  

}