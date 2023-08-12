// Set up express app variables
const express = require('express');
const app = express();
const PORT = 3030;


// Configure dotenv 
require('dotenv').config()
//const dotenv = require('dotenv')



// Initial GET request
app.get('/', async (req,res) => {
    try {
        res.render('index.ejs');
    } catch (error) {
        console.log(error);
    }
});



// Set up PORT connection
app.listen(PORT || process.env.PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
});