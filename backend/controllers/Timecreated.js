const TimeSlotSchema =require("../models/timeslotModel") 
const Timeadder=async(req,res)=>{
    const newdata=new TimeSlotSchema(req.body.data)
    const saveddata=await newdata.save()
    if(saveddata)
    {
        res.send(saveddata)
    }
    else
    res.send("Failed To Save Data")
 }

 module.exports=Timeadder