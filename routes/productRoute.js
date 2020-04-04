const router = require('express').Router()
const productControllers = require('../controllers/productController')

router.get("/", productControllers.GET_PRODUCTS_BY_SEARCH)

module.exports = router