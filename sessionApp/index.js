let express= require("express");
let bodyParser=require("body-parser");
let session=require("express-session");

let app=express();
app.use(express.static("public"));
app.set("views engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    secret:"AB###67576",
    resave:false,
    saveUninitialized:true
}));
app.get("/",(req,res)=>{
    res.render("login.ejs");
});
app.post("/validate",(req,res)=>{
    let {name,pass}=req.body;
    req.session.uname=name;
    req.session.upass=pass;
    res.send(`Username ${req.session.uname}<br><br>
            Password ${req.session.upass}`);
            // res.send("Session id: "+req.sessionID);
});

app.listen(3000,()=>{
    console.log("Server Started");
});
