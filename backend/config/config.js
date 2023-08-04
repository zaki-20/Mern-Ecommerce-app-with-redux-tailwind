const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`database connected ${conn.connection.host} `.blue)

    } catch (error) {
        console.log(`ERROR : ${error.message}`.red);
        process.exit(1)
    }
}
module.exports = connectDB

