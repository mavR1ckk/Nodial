const Post = require("../models/Post")
const User = require("../models/Post")

const createPost = (req, res) =>{    
    var post = req.body;
    post.user = req.user.id;
    Post.create(post, (err, post)=>{
        if(err) console.log('Error While storing post!!');        
        return res.redirect('back');
    })
}

module.exports = {
    createPost : createPost
}