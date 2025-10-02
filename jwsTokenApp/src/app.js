let express= require("express");
let bodyParser=require("body-parser");
let path=require("path");
let cookieParser=require("cookie-parser");
let conn=require("../db.js");
let router=require("../src/routes/router.js");

app=express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser("#$8374$#"));
app.use("/",router);

module.exports=app;