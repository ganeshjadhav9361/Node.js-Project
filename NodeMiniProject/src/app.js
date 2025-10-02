let express= require("express");
let bodyParser= require("body-parser");
let db= require("../db.js");
let router= require("./routes/route.js");
// require("dotenv").config();

let app= express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.set("views", path.join(__dirname,"..", "views"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/",router);

module.exports= app;