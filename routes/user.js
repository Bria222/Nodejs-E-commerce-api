const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('./verifyToken')
const {
  updateUser,
  deleteUser,
  getUser,
  getAllusers,
  getUserStats,
} = require('../controllers/user')

const router = require('express').Router()

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, updateUser)

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, deleteUser)

//GET USER
router.get('/find/:id', verifyTokenAndAdmin, getUser)

//GET ALL USER
router.get('/', verifyTokenAndAdmin, getAllusers)

//GET USER STATS

router.get('/stats', verifyTokenAndAdmin, getUserStats)

module.exports = router
