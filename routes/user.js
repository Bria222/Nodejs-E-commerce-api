const express = require('express')

const router = express.Router()

router.post('/', loginUser)
router.post('/', registerUser)

module.exports = router
