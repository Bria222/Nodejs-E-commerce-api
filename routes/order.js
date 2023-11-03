const {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrders,
  getAllOrders,
  getMonthlyIncome,
} = require('../controllers/order')

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('./verifyToken')

const router = require('express').Router()

//CREATE

router.post('/', verifyToken, createOrder)

//UPDATE
router.put('/:id', verifyTokenAndAdmin, updateOrder)

//DELETE
router.delete('/:id', verifyTokenAndAdmin, deleteOrder)

//GET USER ORDERS
router.get('/find/:userId', verifyTokenAndAuthorization, getUserOrders)

// //GET ALL

router.get('/', verifyTokenAndAdmin, getAllOrders)

// GET MONTHLY INCOME

router.get('/income', verifyTokenAndAdmin, getMonthlyIncome)

module.exports = router
