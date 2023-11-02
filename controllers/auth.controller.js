const CryptoJS = require('crypto-js')
const user = require('../models/user')

const loginUser = async (req, res, next) => {
  res.status(200).json({ status: 'succes' })
}
const registerUser = async (req, res, next) => {
  const newUser = new user({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY.toString()
    ),
  })
  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}
module.exports = { registerUser, loginUser }
