const express=require("express");

const router=express.Router();

router.get("/",(req,res,next) => {
    res.send("<h1> Welcome to NodeJS Server!");

});

router.get("/shop",(req,res,next)=>{
    res.send("</h1> Welcome to the Shop!");
});

module.exports=router;