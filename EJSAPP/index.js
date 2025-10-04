let express= require("express");
let app= express();

app.set("view engine","ejs");

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("demo.ejs",{
        name: "ABC",
        id: 2,
        salary: 10000
    });
});

app.listen(3000,(req,res)=>{
    console.log("server started");
});