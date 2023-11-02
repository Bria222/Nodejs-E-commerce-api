const express = require('express')
const createError = require('http-errors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to the database')
  })
  .catch((err) => {
    console.error('Database connection error:', err)
  })

app.use(express.json())

app.use(morgan('dev'))

const port = process.env.PORT || 5000

const authRoute = require('./routes/auth')
app.use('/api/v1', authRoute)
app.use('/api/v1', authRoute)

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
