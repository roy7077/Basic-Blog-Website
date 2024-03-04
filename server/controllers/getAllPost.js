const post=require('../models/posts');

exports.getAllPost=async (req,res)=>{
    try{
        const response= await post.find({});

        if(!response)
        {
            return res.status(404).
            josn({
                success:true,
                message:`There is no data`
            })
        }

        res.status(200).json(
            {
                success:true,
                data:response,
                Message:"Data Fetched successfully"
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