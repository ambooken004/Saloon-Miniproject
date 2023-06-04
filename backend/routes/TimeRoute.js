const express=require("express")
const router=express.Router()
const Timecreated =require ("../controllers/Timecreated")
router.route("/add").post(Timecreated)

module.exports=router
