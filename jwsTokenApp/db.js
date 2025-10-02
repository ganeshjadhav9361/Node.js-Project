require("dotenv").config();
let mysql=require("mysql2/promise");

let conn=mysql.createPool({
    host:process.env.dbhost,
    user:process.env.dbusername,
    password:process.env.dbpassword,
    database:process.env.dbname,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});

// console.log(conn);
module.exports=conn;