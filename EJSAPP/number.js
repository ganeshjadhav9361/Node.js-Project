let express= require("express");
let app= express();

app.set("view engine","ejs");

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("number.ejs");
});

app.listen(3000,(req,res)=>{
    console.log("server started");
});