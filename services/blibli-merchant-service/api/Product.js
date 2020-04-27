const { validate, rule } = require('../../../helpers/validate')
const BlibliMerchant = require('../service/')

module.exports = {
  GetProducts: async (data) => {
    validate(data, {
      productId: rule.required(),
      productSku: rule.required()
    })
    return new BlibliMerchant().GetProducts(data)
  },
  GetProductBySearch: async (data) => {
    validate(data, {
      search: rule.required()
    })
    return new BlibliMerchant().GetProductsBySearch(data)
  },
  GetCategories: (data) => {
    validate(data, {
      categories: rule.required()
    })
  }
}