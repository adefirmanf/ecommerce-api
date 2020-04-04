const productService = require('../services/product-service')

module.exports = {
  GET_PRODUCTS_BY_SEARCH: async (req, res) => {
    const merchant = req.query.merchant.split(',')
    const fetch = await productService.GetProductBySearch({
      search: req.query.search,
      merchant: merchant
    })
    res.json(fetch)
  }
}