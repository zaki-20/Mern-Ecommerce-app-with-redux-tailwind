const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: {
                type: String,
                required: true
            },
            qty: {
                type: Number,
                required: true
            },
            Image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            Product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
        }
    ],
    shippingAddress: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postalCode: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        },
    },
    payment: {
        type: String,
        required: true
    },
    paymentResult: {
       id:{
        type: String
       },
       status:{
        type: String
       },
       update_time:{
        type: String
       },
       email_address:{
        type:String
       }
    },
    TaxPrice:{
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice:{
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice:{
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid:{
        type: Boolean,
        required: true,
        default: false
    },
    paidAt:{
        type: Date,
    },
    isDelivered:{
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt:{
        type:Date
    }

}, { timestamp: true })

const Order = mongoose.model('Order', orderSchema)
module.exports = Order