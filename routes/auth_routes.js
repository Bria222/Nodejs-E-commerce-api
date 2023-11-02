const express = require('express')
const { registerUser, loginUser } = require('../controllers/auth.controller')
const router = express.Router()

router.post('/', loginUser)
router.post('/', registerUser)

module.exports = router
