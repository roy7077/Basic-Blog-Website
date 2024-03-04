const post = require('../models/posts');

exports.dislikePost = async (req, res) => {
    try {
        const id = req.params.id;
        const existingPost = await post.findById(id);

        // Check if the existing post is found and the dislike count is greater than 0
        if (existingPost && existingPost.dislike > 0) {
            const response = await post.findByIdAndUpdate(id, { $inc: { "dislike": -1 } }, { new: true });

            res.status(200).json({
                success: true,
                data: response, // Now response should contain the updated document
                Message: "Disliked the post"
            });
        } else {
            res.status(400).json({
                success: false,
                data: "Dislike count is already 0 or post not found",
                Message: "Cannot decrease dislike count further"
            });
        }
    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            data: "Internal Server error",
            Message: err.message,
        });
    }
}
