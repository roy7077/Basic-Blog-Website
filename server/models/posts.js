const mongoose = require('mongoose');

// Define schema for pots collection
const postSchema = new mongoose.Schema({
    like:{
        type:Number,
        default:0,
    },
    dislike:{
        type:Number,
        default:0,
    },
    content:{
        type:String,
        required:true,
    },
    comments: [
        {
            type: String
        }
    ]
});

// Create model based on the schema
const post = mongoose.model('post', postSchema);

// Export the model
module.exports = post;
