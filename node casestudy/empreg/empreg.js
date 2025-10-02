let express= require("express");
let bodyParser= require("body-parser");
let path= require("path");
let mysql= require("mysql2");

let conn=mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "MySQL@12345678",
	database: "nodejs"
});

conn.connect((err)=>{
	if(err)
	{
		console.log("connection failed");
	}
	else{
		console.log("Database is connected");
	}
});

let app= express();
app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended: true}));

let p= path.join(__dirname+"/Public");
app.get("/",(req,res)=>{
	res.sendFile(p+"/empreg.html");
});

app.post("/save",(req,res)=>{
	let {name,email,contact,sal}=req.body;
	conn.query("insert into employee values('0',?,?,?,?)",[name,email,contact,sal],(err,result)=>{
		
		if(err)
		{
			console.log("not inserted "+err);
		}
		else{
			if(result.affectedRows>0)
			{
				res.send("Employee added");
			}
			else{
				res.send("Employee not added");
			}
		}
	});
});

app.listen(3000,()=>{
	console.log("server started");
});
