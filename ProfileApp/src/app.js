let express= require("express");
let bodyParser=require("body-parser");
let path=require("path");
let session=require("express-session");
let conn=require("../db.js");
let router=require("../src/routes/router.js");

app=express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret:"37#6778$87435",
    resave:false,
    saveUninitialized:true
}));
app.use("/",router);

module.exports=app;