const mongoose=require("mongoose")
const TimeSchema=mongoose.Schema({
    data:[]
})
module.exports=mongoose.model("TimeslotCreated",TimeSchema);