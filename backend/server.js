const express = require('express');
//const timeslotdatas = require('./data/timeSlotData');
const servicesData = require('./data/saloonServicesData');
const app = express();
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const timeslotRoutes = require('./routes/timeslotRoutes');
const Timeroute= require("./routes/TimeRoute")
const connectDB = require('./config/db.js');
const TimeSchema=require("./models/TimeModel")
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

connectDB();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // to accept json data from user

app.get('/', (req, res) => {
    res.send("API is running though..."); // created an API
});

/* app.get('/api/timeslotdata', (req, res) => {
    res.json(timeslotdatas);
}); */

app.get('/api/servicesdata', (req, res) => {
    res.json(servicesData);
});

app.use('/api/users', userRoutes);

app.use('/api/users', timeslotRoutes);

app.use(notFound);
app.use(errorHandler);
app.post("/timeadd",async(req,res)=>{
    const newdata=new TimeSchema(req.body.data)
    const saveddata=await newdata.save()
    if(saveddata)
    {
        res.send(saveddata)
    }
    else
    res.send("Failed To Save Data")
 })
 app.get("/time",(req,res)=>{
    res.send("ferno")
 })


app.listen(PORT, () => console.log(`Server Running at PORT: ${PORT}`));// created a web server