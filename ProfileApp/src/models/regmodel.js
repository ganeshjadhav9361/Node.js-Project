let conn=require("../../db.js");

async function saveReg(...regdata) {
    let result=conn.query("insert into register values('0',?,?,?,?,?,?)",[...regdata]);
    return result; 
}
async function validateUser(uname,upass){
    let result=await conn.query("select *from register where username=? and password=?" ,[uname,upass]);
    return result;
}
async function getLoginUserProfile(loginUserId) {
    let userData= await conn.query("select *from register where rid=?",[loginUserId]);
    return userData;
}
module.exports={saveReg,validateUser,getLoginUserProfile};