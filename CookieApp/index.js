let express=require("express");
let cookieParser=require("cookie-parser");
let bodyParser=require("body-parser");

let app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser("$#45876345$#"));

app.get("/",(req,res)=>{
    let cookiedata=req.cookies;
    if(cookiedata==undefined){
        res.render("login.ejs"); 
    }
    else{
        res.render("Welcome.ejs");
    }
});

app.post("/setcookie",(req,res)=>{
    let {name,password}=req.body;
    res.cookie("u",name,{maxAge:(1000*60)*3});
    res.cookie("p",password,{maxAge:(1000*60)*3});  
    res.render("Welcome.ejs");
});
// app.get("/readcookie",(req,res)=>{
//     let cookieData=req.cookies.u;
//     res.send(typeof(cookieData));
// });

app.listen(3000,(req,res)=>{
    console.log("Server Started");
});