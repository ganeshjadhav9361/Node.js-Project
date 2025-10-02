let db= require("../../db.js");

exports.saveEmployee=(...empData)=>{
    return new Promise((resolve,reject)=>{
        db.query("insert into employee values('0',?,?,?,?,?,?)",[...empData],(err,result)=>{
            if(err){
                console.log(err);
                reject("not save");
            }
            else{
                resolve("Employee Save Successfully");
            }
        })
    })
}

exports.verifyEmail=(userEmail)=>{
    return new Promise((resolve,reject)=>{
        db.query("select *from employee where email=?",[userEmail],(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(result);
            }
        })
       
    })
}


exports.getEmployeeByDeptId=(deptId)=>{
    return new Promise((resolve,reject)=>{
        db.query("select e.name,e.email,e.contact,e.photo,d.deptname from employee e join dept d on e.deptid=d.deptid where e.deptid=?",[deptId],(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(result);
            }
        })
       
    })
}

exports.delEmpById=(eid)=>{
    return new Promise((resolve,reject)=>{
        db.query("delete from employee where eid=?",[eid],(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve("Delete Employee Successfully");
            }
        });
    });
}