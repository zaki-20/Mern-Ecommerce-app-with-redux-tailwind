
const express = require('express');
const { getProduct, getProducts } = require('../controllers/productsController');
const router = express.Router()


//get route for all products
router.route('/products').get(getProducts)


//get route for product
router.route('/products/:id').get(getProduct)


module.exports = router