const productService = require('../services/product-service')

module.exports = {
  GET_PRODUCT: async (req, res) => {
    const fetch = await productService.GetProducts({
      merchant: req.params.merchant,
      productId: req.params.productId,
      productSku: req.params.productSku
    })
    res.json(fetch)
  },
  GET_PRODUCTS_BY_SEARCH: async (req, res) => {
    const merchant = req.query.merchant.split(',')
    const fetch = await productService.GetProductBySearch({
      search: req.query.search,
      merchant: merchant
    })
    res.json(fetch)
  }
}