let db= require("../../db.js");

exports.AddProduct=((name,category,price,quantity)=>{
        return new Promise((resolve,reject)=>{
            let sql= "insert into product(name,category,price,quantity) values(?,?,?,?)";
            db.query(sql,[name,category,price,quantity],(err,result)=>{
                if(err){
                    reject("Product not added");
    
                }
                else{
                    resolve("Product Added Successfully......");
                }
            });
        });
});

exports.ViewAllProduct=(()=>{
    return new Promise((resolve,reject)=>{
        let sql= "select *from product";
        db.query(sql,(err,result)=>{
            if(err){
                reject("Error in fetching product");
            }
            else{
                resolve(result);
            }
        });
    });
});

exports.DeleteProduct=((pid)=>{
    return new Promise((resolve,reject)=>{
        let sql="delete from product where pid=?";
        db.query(sql,[pid],(err,result)=>{
            if(err){
                reject(err);

            }else{
                resolve(result);
            }
        })
    })
})

exports.UpdateProductDataM=((pid, name, category, price, quantity)=>{
    console.log(name,category);
    return new Promise((resolve,reject)=>{
        let sql="update product set name=?,category=?,price=?,quantity=? where pid=?";
        db.query(sql,[ name, category, price, quantity,pid],(err,result)=>{
            if(err){
                reject(err);
                console.log(err);
                
            }
            else{
                resolve(result);
            }
        })
    })
})

exports.searchProdByUsingName=(name)=>{
    return new Promise((resolve,reject)=>{
        let sql = "SELECT * FROM product WHERE name LIKE ?";
        db.query(sql,[`%${name}%`],(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}