const router = require('express').Router()
const { registerUser, loginUser } = require('../controllers/auth')

//REGISTER
router.post('/register', registerUser)
//LOGIN
router.post('/login', loginUser)

module.exports = router
