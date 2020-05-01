const { validate, rule } = require('../../../helpers/validate')
const BlibliMerchant = require('../service/')

module.exports = {
  GetProducts: async (data) => {
    validate(data, {
      productId: rule.required(),
      productSku: rule.required()
    })
    return new BlibliMerchant().GetProducts(data).catch(err => {
      throw err
    })
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