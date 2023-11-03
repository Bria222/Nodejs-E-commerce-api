const {
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getAllProducts,
} = require('../controllers/products')

const { verifyTokenAndAdmin } = require('./verifyToken')

const router = require('express').Router()

//CREATE

router.post('/', verifyTokenAndAdmin, createProduct)

//UPDATE
router.put('/:id', verifyTokenAndAdmin, updateProduct)

//DELETE
router.delete('/:id', verifyTokenAndAdmin, deleteProduct)

//GET PRODUCT
router.get('/find/:id', getSingleProduct)

//GET ALL PRODUCTS
router.get('/', getAllProducts)

module.exports = router
