const Post = require('../models/posts');

exports.addComment = async (req, res) => {
    try {
        const postId = req.params.id;
        const { comment } = req.body;
     
        if (!comment) {
            return res.status(400).json({
                success: false,
                message: "Comment is required"
            });
        }

        const updatedPost = await Post.findByIdAndUpdate(postId, { $push: { comments: comment } }, { new: true });

        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedPost,
            message: "Comment added successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        });
    }
};
