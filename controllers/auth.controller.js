const CryptoJS = require('crypto-js')
const User = require('../models/user') // Assuming your user model is exported as "User"

const registerUser = async (req, res, next) => {
  const newUser = new User({
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

const loginUser = async (req, res, next) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(401).json('Wrong Login credentials')
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    )
    const decryptedPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

    if (decryptedPassword !== password) {
      return res.status(401).json('Wrong password credentials')
    }

    const { password: userPassword, ...others } = user._doc
    res.status(200).json(others)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

module.exports = { registerUser, loginUser }
