let dbmodel= require("../models/prodModel.js");

exports.homePage=(req,res)=>{
    res.render("home.ejs");
}
exports.AddProduct=((req,res)=>{
    let {name,category,price,quantity} = req.body;
    let promise= dbmodel.AddProduct(name,category,price,quantity);
    promise.then((result)=>{
            res.render("addproduct.ejs",{msg:"Product Added Successfully......"});
            
    }).catch((err)=>{
        res.render("addproduct.ejs",{msg:"Product not added"});
    });
});

exports.newProd=((req,res)=>{
    res.render("addproduct.ejs",{msg:""});
});

exports.ViewAllProduct=(req,res)=>{
    let promise= dbmodel.ViewAllProduct();
    promise.then((result)=>{
        res.render("viewProducts.ejs", {
            prodList: result,
            msg: req.query.msg || ""
        });
    }).catch((err)=>{
        res.send(err);
    });
}

exports.DeleteProduct=((req,res)=>{
    let pid=req.query.pid;
    let promise=dbmodel.DeleteProduct(pid);
    promise.then((result)=>{
        dbmodel.ViewAllProduct().then((prodList)=>{
            res.render("viewProducts.ejs", { prodList: Array.isArray(prodList) ? prodList : [], msg: "Product Deleted Successfully......" });

        }).catch((err)=>{
            res.send(err);
            
        })
    }).catch((err)=>{
        res.send(err);
    })
})


exports.UpdateProduct=(req,res)=>{
res.render("updateProduct.ejs",{
            pid:req.query.pid,
            name:req.query.name,
            category:req.query.category,
            price:req.query.price,
            quantity:req.query.quantity});
        }

exports.UpdateProductData=(req,res)=>{
    let {pid, name, category, price, quantity}=req.body;
    console.log(req.body);
    let promise=dbmodel.UpdateProductDataM(pid, name, category, price, quantity);
    promise.then((result)=>{
        let pro= dbmodel.ViewAllProduct();
    pro.then((result)=>{
        if(result.length!=0){
            res.render("viewProducts.ejs",{prodList:result,msg:""});
        }
        else{
            res.render("viewProducts.ejs",{prodList:[],msg:"No Product Found"});
        }
    }).catch((err)=>{
        console.log(err);
        
        res.send(err);
    });
    }).catch((err)=>{
        res.send("product not updated");
    })
}

exports.searchProdByUsingName=((req,res)=>{
    let name=req.query.name;
    console.log(name);
    let promise=dbmodel.searchProdByUsingName(name);
    promise.then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.send("wrong");
    });
});

