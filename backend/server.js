const express = require('express');
const app = express();
const dotenv = require('dotenv').config();


app.get('/', (req, res) => {
    res.send("API is running though...");// created an API
});

app.get('/about', (req, res) => {
    res.send("This is about us page");// created an API
});






const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server Running at PORT: ${PORT}`));// created a web server