const express=require('express')
const router=express.Router();
const {checkUser,createToken} =require("./controller/login")
const jwt=require('jsonwebtoken');
const Product = require('./model/productSchema');
const Cart = require('./model/cartSchema');


router.post("/login",async(req,res)=>{
    try{
        const data=req.body;
        console.log(data)
        const result=await checkUser(req.body)
        const token=await createToken(result);
        res.send(token)
    }
    catch(error){
        res.send(error)
    }
})

router.post("/login/verify",async(req,res)=>{
    try{
        const data=req.body.token;
        let id=await jwt.verify(data,"mysecret")
        res.send(id)
    }
    catch(error){
        res.send(error)
    }
})


router.get("/getAllProduct",async(req,res)=>{
    try{
        const data=await Product.find();
        res.send(data)
    }
    catch(error){
        res.send(error)
    }
})


router.get("/addToCart",async(req,res)=>{
    try{
        const data=await Cart.create({
            userId: req.body.userId,
            productId:req.body.productId,
            quantity: req.body.quantity
        })
        res.send(data)
    }
    catch(error){
        res.send(error);
    }
})
module.exports=router
