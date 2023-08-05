
const express = require('express');
const { authController, getUserPrfile, registerUser } = require('../controllers/usersController');
const {protect} = require("../middlewares/authMiddleware")
const router = express.Router()


//user registration
router.route('/').post(registerUser)


//get route for all products
router.route('/login').post(authController)

//get user profile private route
router.route('/profile').get(protect, getUserPrfile)

//get route for product
// router.route('/products/:id').get(getProduct)


module.exports = router