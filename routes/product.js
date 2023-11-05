const {
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getAllProducts,
  getUserProducts,
} = require('../controllers/products')

const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require('./verifyToken')

const router = require('express').Router()

//CREATE

router.post('/', verifyTokenAndAdmin, createProduct)

//UPDATE
router.put('/:id', verifyTokenAndAdmin, updateProduct)

//DELETE
router.delete('/:id', verifyTokenAndAdmin, deleteProduct)

//GET PRODUCT
router.get('/find/:id', getSingleProduct)
//GET USER PRODUCTS
router.get('/allproducts/:userId', verifyTokenAndAuthorization, getUserProducts)
//GET ALL PRODUCTS
router.get('/', getAllProducts)

module.exports = router
