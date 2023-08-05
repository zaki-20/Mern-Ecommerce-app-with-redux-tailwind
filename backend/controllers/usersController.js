const User = require('../models/UserModel')
const asyncHandler = require('express-async-handler')

const authController = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if(user && User.matchPassword(password)){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,

        })
    }
})


module.exports = { authController }