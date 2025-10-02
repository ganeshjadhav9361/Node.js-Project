let dbmodel= require("../models/savedeptmodel.js");
let empCrud= require("../models/empcrudmodel.js");
const e = require("express");
exports.newemp=(req,res)=>{
    let promise= dbmodel.getAllDept();
    promise.then((result)=>{
        res.render("newemp.ejs",({deptList:result,msg:""}));
    });
}

exports.saveEmployee=(req,res)=>{
     let{name,email,contact,sal,deptid}= req.body;
    let filename=req.file.filename;
    let promise= empCrud.saveEmployee(name,email,contact,sal,filename,deptid);
    promise.then((result)=>{
        let p= dbmodel.getAllDept();
    p.then((r)=>{
        res.render("newemp.ejs",({deptList:r,msg:result}));
    })
        
    })
    promise.catch((err)=>{
        console.log(err);
    })

}

exports.verifyEmail=(req,res)=>{
    let userEmail=req.query.e;
    let promise=empCrud.verifyEmail(userEmail);
    promise.then((result)=>{
        if(result.length>0)
        {
            res.send("Email already present");
        }
        else{
            res.send("");
        }
    })
}


exports.viewEmployee=(req,res)=>{
    let p= dbmodel.getAllDept();
    p.then((r)=>{
        res.render("viewemployee.ejs",({deptList:r}));
    })
}

exports.getEmployeeByDeptId=(req,res)=>{
    let deptId=parseInt(req.query.deptId);
    let promise=empCrud.getEmployeeByDeptId(deptId);
    promise.then((result)=>{
        res.json(result);
    })
}

exports.delEmp=(req,res)=>{
    let eid= parseInt(req.query.eid);
    let promise= deptmodel.delEmpById(eid);
    promise.then((result)=>{
        let p= deptmodel.getAllDept();
        p.then((result)=>{
       res.render("viewemployee.ejs",{deptList:result});
    }).catch((err)=>{
        res.send(err);
    });
    }).catch((err)=>{

    });
}