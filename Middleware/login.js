let express= require("express");
let bodyParser= require("body-parser");

let app= express();
app.set("views engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=>{
    res.render("login.ejs",{msg:""});
});

app.use((req,res,next)=>{
    let {username,Password}= req.body;
    console.log(username);
    if(username=="Admin"){
        next();
    }
    else{
        res.render("login.ejs",{msg:"login failed"});
    }
});
app.post("/save",(req,res)=>{
    res.send("Request Recieved");
});

app.listen(3000,(req,res)=>{
    console.log("server started");
});