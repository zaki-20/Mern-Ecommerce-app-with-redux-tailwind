const express = require('express')
const { errorHandler } = require('./middlewares/errorMiddleware')
require('colors')
const dotenv = require('dotenv')
const Products = require('./data/Product')
const coonectDB = require('./config/config')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')

const app = express()

//middleware for body-parser
app.use(express.json())


//dotenv && connection
dotenv.config()
coonectDB();


//rourtes
app.use('/api', productRoute)
app.use('/api/users', userRoute)

app.get('/', (req, res) => {
    res.send("welcome to Server")
})

//middlewares
app.use(errorHandler)

//ports
const PORT = 8080
app.listen(8080 || process.env.PORT, () => {
    console.log(`server running in ${process.env.MODE_ENV} mode on port: ${process.env.PORT}`.blue)
})