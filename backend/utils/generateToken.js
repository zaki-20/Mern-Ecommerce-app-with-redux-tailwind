const jwt = require('jsonwebtoken')


const generateToken = (userId) => {
    const payload = {
        userId,  // Customize the payload as needed
    };
    const secretKey = process.env.JWT_KEY; // Replace with your secret key
    const options = {
        expiresIn: '1h',  // Token expiration time
    };
    const token = jwt.sign(payload, secretKey, options);
    return token;
};

module.exports = generateToken