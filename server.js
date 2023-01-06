const express=require('express')
const mongoose=require('mongoose');
const router=require('./router')
const app=express();

mongoose.connect("mongodb://localhost:27017").then(()=>console.log("db connected")).catch("db connection fail");

app.use(express.json());

app.use("/",router)

app.listen(5000,()=>{
    console.log("app is listining on port 5000")
})