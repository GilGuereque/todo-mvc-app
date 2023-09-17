// Set up express app variables
const express = require('express');
const app = express();
const PORT = 3030;

// set up mongoose & config
const mongoose = require('mongoose')
const passport = require('passport')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const flash = require('express-flash')
// const logger = require('morgan')
const connectDB = require('./config/database')

// Set up Routes
const homeRoutes = require('./routes/home');
const todosRoutes = require('./routes/todos')

// Configure dotenv 
require('dotenv').config({path: './config/.env'})
//const dotenv = require('dotenv')

// Passport config
require('./config/passport')(passport)

// Connect Database
connectDB();

// set up EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

// // Sessions
// app.use(
//     session({
//       secret: 'keyboard cat',
//       resave: false,
//       saveUninitialized: false,
//       store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     })
//   )

// // Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

// app.use(flash())

// Use routes
app.use('/', mainRoutes);
app.use('/todos', todosRoutes);


// Set up PORT connection
app.listen(PORT || process.env.PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
});