const jwt = require('jsonwebtoken')
const User = require("../models/UserModel")
const asyncHandler = require("express-async-handler")

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, process.env.JWT_KEY)
            req.body = await User.findById(decode.userId).select('-password')
            next()

        } catch (error) { 
            console.log(error)
            res.status(401)
            throw new Error("Not Authorized, Token Failed")
        }

    }
    if (!token) {
        res.status(401);
        throw new Error("Not Authorized, Not Token")
    }


})

module.exports = { protect };
