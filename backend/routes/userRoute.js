
const express = require('express');
const { authController } = require('../controllers/usersController');
const router = express.Router()


//get route for all products
router.route('/login').post(authController)


//get route for product
// router.route('/products/:id').get(getProduct)


module.exports = router