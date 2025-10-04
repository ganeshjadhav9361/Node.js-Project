let express= require("express");
const bodyParser= require("body-parser");

let app= express();
app.set("view engine","ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/table",(req,res)=>{
    res.render("table.ejs",{no:0});
});

app.post("/printtab",(req,res)=>{
    let {num}= req.body;
    res.render("table.ejs",{no:num});
});

app.listen(3000,()=>{
    console.log("server started");
});