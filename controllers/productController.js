const productService = require('../services/product-service')

module.exports = {
  GET_PRODUCT: async (req, res) => {
    try {
      const fetch = await productService.GetProducts({
        merchant: req.params.merchant,
        productId: req.params.productId,
        productSku: req.params.productSku
      })
      res.json({ ...fetch, error: false })
    }
    catch (err) {
      res.status(500).json({ error: true })
    }
  },
  GET_PRODUCTS_BY_SEARCH: async (req, res) => {
    const merchant = req.query.merchant.split(',')
    try {
      const fetch = await productService.GetProductBySearch({
        search: req.query.search,
        merchant: merchant
      })
      res.json(fetch)
    }
    catch (err) {
      res.json(err)
    }
  }
}