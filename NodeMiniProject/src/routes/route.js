let express= require("express");
let deptctrl= require("../controllers/deptcontroller.js");
let empctrl= require("../controllers/empctrl.js");
let router= express.Router();
let upload= require("../middleware/fileupload.js");

// router.get("/deldept",deptctrl.delDeptById);


router.post("/adddept",deptctrl.saveDept);
router.get("/",deptctrl.homePage); 
router.get("/newdept",deptctrl.newDept);
router.get("/viewalldept",deptctrl.getAllDept);
router.get("/deldept",deptctrl.delDept);
router.get("/upddept",deptctrl.updateDept);
router.post("/updatedept",deptctrl.deptUpdateFinal);
router.get("/searchDeptByName",deptctrl.searchDeptByUsingName);
router.get("/newemployee",empctrl.newemp);

router.post("/saveemp",upload.single("photo"),empctrl.saveEmployee);

router.get("/searchEmail",empctrl.verifyEmail);
router.get("/viewemployee",empctrl.viewEmployee);
router.get("/getEmpByDeptId",empctrl.getEmployeeByDeptId);


// router.get("/testup",(req,res)=>{
//     res.render("demoupload.ejs");
// }); 
module.exports= router;