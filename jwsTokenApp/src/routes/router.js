let express=require("express");
let router=express.Router();
let ctrl=require("../controllers/loginctrl.js");
let upload=require("../middleware/uploadmiddleware.js");

router.get("/",ctrl.loginController);
router.get("/reg",ctrl.regController);
router.post("/regsave",upload.single("photo"), ctrl.saveReg);
router.post("/validateuser",ctrl.validateLoginUser);
router.get("/getloginuserprofile",ctrl.getLoginUserProfile);
module.exports=router; 