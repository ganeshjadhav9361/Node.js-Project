let jwt=require("jsonwebtoken");
const secretKey="abcd1234";

const token=jwt.sign({
	id:1,
	username:"Ganesh"
},secretKey,{expiresIn:'1h'});

console.log(token);

jwt.verify(token,secretKey,(err,decoded)=>{
	if(err){
		console.log("Invalid Token");
	}
	else{
		console.log("Token Verified");
		console.log(decoded);
	}
});