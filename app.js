const express = require('express')
const createError = require('http-errors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to the database')
  })
  .catch((err) => {
    console.log(err)
  })
app.use(express.json())
const authRoute = require('./routes/auth_routes')

app.use(morgan('dev'))
port = process.env.PORT || 5000

app.use('/', authRoute)
app.use('/register', authRoute)

app.listen(5000, () => {
  console.log(`app listening on port ${port}`)
})
