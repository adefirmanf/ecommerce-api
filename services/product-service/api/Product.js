const { validate, rule } = require('../../../helpers/validate')
const Product = require('../service')

module.exports = {
  GetProducts: async (data) => {
    console.log(data)
    validate(data, {
      merchant: rule.required(),
      productId: rule.required(),
      productSku: rule.required()
    })
    return new Product().GetProduct(data).catch(err => { throw err })
  },
  GetProductBySearch: async (data) => {
    validate(data, {
      search: rule.required(),
      merchant: rule.array()
    })
    return new Product().GetProductsBySearch(data)
  },
  GetCategories: (data) => {
    validate(data, {
      categories: rule.required()
    })
  }
}