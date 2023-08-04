const mongoose = require('mongoose')


const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
},{timestamp:true})



const productSchema = mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    review:[reviewSchema],
    rating:{
        type: Number,
        required: true
    },
    numReviews:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    counterStock:{
        type: Number,
        required: true
    }

   
},{timestamp: true})

const Product = mongoose.model('Product', productSchema)
module.exports = Product