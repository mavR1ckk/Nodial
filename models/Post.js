const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        topic:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required : true
        },
        user :{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },{
        timestamps: true
    }
)

module.exports = mongoose.model('Post', postSchema);