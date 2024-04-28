const path=require("path");

const express=require("express");

const rootDir=require("../util/path");

const router=express.Router();

router.get("/add-product",(req,res,next) => {
    //es.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.get("/",(req,res,next)=>{
    res.send("</h1> Welcome to the Shop!");
});

module.exports=router;