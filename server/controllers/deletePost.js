const post=require('../models/posts');

exports.deletePost=async (req,res)=>{
    try{
        const id=req.params.id;
        const response= await post.deleteOne({ _id:id });

        res.status(200).json(
            {
                success:true,
                data:response,
                Message:"Entry deleted successfully"
            }
        )
    }
    catch(err)
    {
        console.log(err);
        
        res.status(500)
        .json({
            success:false,
            data:"internal Server error",
            Message:err.message,
        })
    }
}