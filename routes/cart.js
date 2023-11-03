const {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
  getAllCarts,
} = require('../controllers/cart')
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('./verifyToken')

const router = require('express').Router()

//CREATE

router.post('/', verifyToken, createCart)

//UPDATE
router.put('/:id', verifyTokenAndAuthorization, updateCart)

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, deleteCart)

//GET USER CART
router.get('/find/:userId', verifyTokenAndAuthorization, getUserCart)

// //GET ALL

router.get('/', verifyTokenAndAdmin, getAllCarts)

module.exports = router
