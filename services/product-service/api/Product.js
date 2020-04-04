const { validate, rule } = require('../../../helpers/validate')
const Product = require('../service')

module.exports = {
  GetProducts: () => { },
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