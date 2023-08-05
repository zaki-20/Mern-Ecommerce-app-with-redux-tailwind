const Product = require('../models/ProductModel')
const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find()
    // throw new Error("Some thing went worng")
    res.json(products)

})

const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({
            message: "product not found"
        })
    }
})

module.exports = {getProducts, getProduct}