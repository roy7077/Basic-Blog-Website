const post = require('../models/posts');

exports.likePost = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await post.findByIdAndUpdate(id, { $inc: { "like": 1 } }, { new: true });
        // Await the result of findByIdAndUpdate to get the updated document

        res.status(200).json({
            success: true,
            data: response, // Now response should contain the updated document
            Message: "liked the post"
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            data: "Internal Server error",
            Message: err.message,
        });
    }
}
