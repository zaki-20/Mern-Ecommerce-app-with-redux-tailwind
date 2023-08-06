const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler')
const generateToken = require("../utils/generateToken")


//controller for registration
const registerUser = asyncHandler( async(req, res) => {
    const {name, email, password} = req.body;
    const userExist = await User.findOne({email})

    if(userExist){
        res.status(409);
        throw new Error("user already exist")
    }
    const user = await User.create({name, email, password})

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }
})

//update user controller
const updateUserProfile = asyncHandler(async(req, res)=> {
    const user = await User.findById(req.user._id)
    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        const userUpdate = await user.save()
        res.json({
            _id: userUpdate._id,
            name: userUpdate.name,
            email: userUpdate.email,
            isAdmin: userUpdate.isAdmin,
            token: generateToken(userUpdate._id)
        })
    }else{
        res.status(404)
        throw new Error("user not found..")
    }
})


const authController = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && await user.matchPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error("invalid username or password")
    }
})


const getUserPrfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.body._id)
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error("User not found..")
    }

})


module.exports = { authController, getUserPrfile, registerUser, updateUserProfile }