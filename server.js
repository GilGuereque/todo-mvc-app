// Set up express app variables
const express = require('express');
const app = express();
const PORT = 3030;

// set up mongoose & config
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')

// Set up Routes
const mainRoutes = require('./routes/main');
const todosRoutes = require('./routes/todos')

// Configure dotenv 
require('dotenv').config({path: './config/.env'})
//const dotenv = require('dotenv')

// Passport config
require('./config/passport')(passport)

// Connect Database
connectDB();



// Initial GET request
app.get('/', async (req,res) => {
    try {
        res.render('index.ejs');
    } catch (error) {
        console.log(error);
    }
});

// Use routes
app.use('/', mainRoutes);
app.use('/todos', todosRoutes);


// Set up PORT connection
app.listen(PORT || process.env.PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
});