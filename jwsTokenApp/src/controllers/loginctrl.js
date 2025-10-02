let regmodel=require("../models/regmodel.js");
let bcrypt=require("bcryptjs");
let jwt=require('jsonwebtoken');
let secretKey="ABCD#$1234";


exports.loginController=(req,res)=>{
    res.render("login.ejs",{msg:""});
}
exports.regController=(req,res)=>{
    res.render("register.ejs",{msg:""});
}
exports.saveReg=(req,res)=>{
     let {name,email,contact,username,password}=req.body;
    let encFormatPass=bcrypt.hashSync(password,8);
     let result=regmodel.saveReg(name,email,contact,username,encFormatPass,req.file.filename);
     result.then((r)=>{
        if(r[0].affectedRows>=1)
        {
            res.render("register.ejs",{msg:"Registration successfully........."});
        }
        else{
            res.render("register.ejs",{msg:"Registration failled............"});
        }
     }).catch((err)=>{
        console.log(err);
     })
}

exports.validateLoginUser=(req,res)=>{
    let {username,password}=req.body;
    let result=regmodel.validateUser(username);
    result.then((r)=>{
       if(r[0].length>0){
        let userData=r[0];
       let dbPassword=userData[0].password;
       let valid=bcrypt.compareSync(password,dbPassword);
       if(valid){

        let token=jwt.sign({
            id:userData[0].rid,
            name:userData[0].name
        },secretKey,{expiresIn:'1m'});
        res.cookie("token",token);

       res.render("viewprofile.ejs",{loginUserName:userData[0].name});
       }
       else{
        res.render("login.ejs",{msg:"Login Failed"});
       }
    }
    }).catch((err)=>{
        res.render("login.ejs",{msg:"Login Failed"});
    })
}

exports.getLoginUserProfile=(req,res)=>{
    let token=req.cookies.token;
    jwt.verify(token,secretKey,(err,decoded)=>{
        if(decoded==undefined){
            res.render("login.ejs",{msg:"Token Expire"});
        }
        else{
        let result=regmodel.getLoginUserProfile(decoded.id);
        result.then((r)=>{
        if(r[0].length>0){
            let userData=r[0][0]; 
            res.render("showprofile.ejs",{u:userData});
        }
        else{
            res.render("login.ejs",{msg:"Token Expire"});
        }
    }).catch((err)=>{
        res.render("login.ejs",{msg:"Token Expire"});
    });
}
    });
}