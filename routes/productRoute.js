const router = require('express').Router()
const productControllers = require('../controllers/productController')

router.get("/", productControllers.GET_PRODUCTS_BY_SEARCH)
router.get("/:merchant/:productId/:productSku/", productControllers.GET_PRODUCT)
module.exports = router