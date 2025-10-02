let express= require("express");
let bodyParser= require("body-parser");
let path= require("path");
let mysql= require("mysql2");

let conn= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySQL@12345678",
    database: "nodejs"
});

conn.connect((err)=>{
    if(err)
    {
        console.log("connection is failed");
    }
    else{
        console.log("Database is connected");
    }
});
let app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let p=path.join(__dirname+"/public");
app.get("/",(req,res)=>{
    res.sendFile(p+"/Registration.html");
});

app.post("/save",(req,res)=>{
    let {name,email,contact,Qualification,DOB,University}=req.body;
    let sql = "INSERT INTO student(name, email, contact, Qualification, DOB, University) VALUES (?, ?, ?, ?, ?, ?)";

    conn.query(sql,[name,email,contact,Qualification,DOB,University],(err,result)=>{
            if(err)
            {
                console.log("not inserted"+err);
            }
            else{
                if(result.affectedRows>0)
                {
                    res.send("student added");
                }
                else{
                    res.send("student not added");
                }
            }
        });
});

app.listen(3000,()=>{
    console.log("server started");
});