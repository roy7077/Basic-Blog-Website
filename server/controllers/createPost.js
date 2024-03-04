const post=require('../models/posts');

exports.createPost=async (req,res)=>{
    try{
        const {like,dislike,content}=req.body;
        //console.log(req.body);
        const response= await post.create({like,dislike,content});

        res.status(200).json(
            {
                success:true,
                data:response,
                Message:"Entry Created Successfully done"
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