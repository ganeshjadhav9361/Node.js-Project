let regmodel=require("../models/regmodel.js");
exports.loginController=(req,res)=>{
    res.render("login.ejs",{msg:""});
}
exports.regController=(req,res)=>{
    res.render("register.ejs",{msg:""});
}
exports.saveReg=(req,res)=>{
     let {name,email,contact,username,password}=req.body;
    //  console.log(name+"\t"+email+"\t"+contact+"\t"+username+"\t"+password);
     let result=regmodel.saveReg(name,email,contact,username,password,req.file.filename);
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
    let result=regmodel.validateUser(username,password);
    result.then((r)=>{
       if(r[0].length>0){
        let userData=r[0];
       req.session.loginUserId=userData[0].rid;
       req.session.loginUsername=userData[0].name;
       res.render("viewprofile.ejs",{loginUserName:userData[0].name});
       }
       else{
        res.render("login.ejs",{msg:"Login Failed"});
       }
    }).catch((err)=>{
        res.render("login.ejs",{msg:"Login Failed"});
    })
}

exports.getLoginUserProfile=(req,res)=>{
    let loginUserId=req.session.loginUserId;
    let result=regmodel.getLoginUserProfile(loginUserId);
    result.then((r)=>{
        if(r[0].length>0){
            let userData=r[0][0]; 
            res.render("showprofile.ejs",{u:userData});
        }
    })
}