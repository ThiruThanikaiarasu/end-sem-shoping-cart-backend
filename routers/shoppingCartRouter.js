const express = require('express')
const router = express.Router()
const imageUpload = require('../Middleware/imageUpload')
const {getAllProducts, addNewProduct, getFileByName} = require('../Controller/ProductContoller')
const {addProductsToCart, getAllCartItems, getCartTotal, checkOutCart} = require('../Controller/ShoppingCartController')

router.route('/').get(getAllProducts)

router.route('/assets/:filename').get(getFileByName)

router.route('/upload').post(imageUpload.single('productImage'),addNewProduct)

router.route('/cart').get(getAllCartItems)

router.route('/cartTotal').get(getCartTotal)

router.route('/cart').post(addProductsToCart)

router.route('/checkout').delete(checkOutCart)


module.exports = router