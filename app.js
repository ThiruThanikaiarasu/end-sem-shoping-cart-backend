require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 3500
const shoppingCartRouter = require('./routers/shoppingCartRouter')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error",(error)=>{console.log({ErrorMessage: error.message})})
db.once("open",()=>{console.log("Database Connection Established")})

app.use('/api/v1/shoppingCart', shoppingCartRouter)

app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`))
