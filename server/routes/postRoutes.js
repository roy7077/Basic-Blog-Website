const express=require('express');
const router=express.Router();
const {createPost}=require('../controllers/createPost');
const {likePost}=require('../controllers/likePost');
const {dislikePost}=require('../controllers/dislikePost');
const {deletePost}=require('../controllers/deletePost');
const {addComment}=require('../controllers/addComment');
const {getAllPost}=require('../controllers/getAllPost');

router.post('/createPost',createPost);
router.put('/likePost/:id',likePost);
router.put('/dislikePost/:id',dislikePost);
router.delete('/deletePost/:id',deletePost);
router.post('/addComment/:id',addComment);
router.get('/getAllPost',getAllPost);

module.exports=router;