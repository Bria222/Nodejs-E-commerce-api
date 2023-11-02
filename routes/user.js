const express = require('express')
const verifyToken = require('./verifyToken')
const user = require('../models/user')

const router = express.Router()

router.put(
  '/:id',
  verifyToken.verifyTokenandAuthorization,
  async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_SECRET_KEY.toString()
      )
    }

    try {
      const updatedUser = await user.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(200).json(updatedUser)
    } catch (error) {
      res.status(500).json(error)
    }
  }
)

module.exports = router
