const express= require("express");

const router=express.Router();

router.get("/add_product",(req,res,next) => {
    console.log("Product Page");
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>');
});

router.use("/product", (req,res,next) => {
    console.log(req.body);
    res.redirect("/");
});
module.exports=router;