const express=require('express');
const app=express();
const router=express.Router();
const postRoutes=require('./routes/postRoutes');
const dbConnect=require('./config/databases');

require('dotenv').config();
app.use(express.json());

const PORT=process.env.PORT || 8080;

app.use('/api/v1',postRoutes);

app.get('/',(req,res)=>{
    res.send(`<h1> Welcome to home page </h1>`);
})

app.listen(PORT,()=>{
    console.log("Server Started SuccessFully");
})

dbConnect();