const bodyParser = require("body-parser");
const express= require("express");
const fs=require("fs");

const app=express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err);
            data='No chat exists';
        }
        res.send(
            `${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
                <input type="text" name="message" id="message">
                <input type="hidden" name="username" id="username">
                <br />
                <button type="submit">Send</button>
            </form>`
        );
    });
    
});

app.post("/",(req,res,next)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt", `${req.body.username}: ${req.body.message}`, {flag:'a'}, (err)=>{
        err ? console.log(err):res.redirect("/");
    });
});

app.get("/login", (req, res, next) => {
    res.send(
        `<form action="/login" method="POST" onSubmit="localStorage.setItem('username', document.getElementById('username').value)">
            <input type="text" name="username" placeholder="username" id="username">
            <button type="submit">Login</button>
        </form>`
    );
});

app.post("/login",(req,res,next)=>{
    console.log(req.body);
    console.log(JSON.stringify(req.body));
    res.redirect("/");
});
app.listen(3000);