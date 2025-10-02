let express= require("express");
let bodyParser= require("body-parser");
let path= require("path");
let app= express();

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/sal",(req,res)=>{
    res.render("CalSal.ejs",{no:0});
});
app.post("/save",(req,res)=>{
    let name= req.body.name;
    let email= req.body.email;
    let contact= req.body.contact;
    let sal= parseFloat(req.body.sal);
    let da= (sal*30)/100;
    let hra= (sal*30)/100;
    let total= sal+da+hra;
    res.render("CalSal.ejs", {
        name: name,
        email: email,
        contact: contact,
        sal: sal,
        da: da,
        hra: hra,
        total: total
    });
});

app.listen(3000,(req,res)=>{
    console.log("server started");
});