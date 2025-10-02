let express= require("express");
let ctrl= require("../controller/prodCtrl.js");
let router= express.Router();

router.get("/",ctrl.homePage); 
router.post("/addproduct",ctrl.AddProduct);
router.get("/newprod",ctrl.newProd);
router.get("/allproduct",ctrl.ViewAllProduct);
router.get("/delProd",ctrl.DeleteProduct);
router.get("/updprod",ctrl.UpdateProduct);
router.post("/updateProduct",ctrl.UpdateProductData);
router.get("/searchProdByName",ctrl.searchProdByUsingName);

module.exports= router;