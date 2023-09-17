const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home')

//Routes
router.get('/', homeController.getIndex);

// // Initial GET request
// app.get('/', async (req,res) => {
//     try {
//         res.render('index.ejs');
//     } catch (error) {
//         console.log(error);
//     }
// });

// export module
module.exports = router