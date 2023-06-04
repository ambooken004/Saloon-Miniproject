const mongoose=require("mongoose")
const TimeSchema=mongoose.Schema({
    id:Number,
    timeslot:[]
},{
    timestamps:true
})
module.exports=mongoose.model("TimeslotCreated",TimeSchema);