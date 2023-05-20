const express = require('express');
const timeslotdatas = require('./data/timeSlotData');
const servicesData = require('./data/saloonServicesData');
const app = express();
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db.js');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

connectDB();

app.use(express.json()); // to accept json data from user

app.get('/', (req, res) => {
    res.send("API is running though..."); // created an API
});

app.get('/api/timeslotdata', (req, res) => {
    res.json(timeslotdatas);
});

app.get('/api/servicesdata', (req, res) => {
    res.json(servicesData);
});

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server Running at PORT: ${PORT}`));// created a web server