const { validate, rule } = require('../../../helpers/validate')

module.exports = {
  GetProducts: () => { },
  GetProductBySearch: async (data) => {
    validate(data, {
      search: rule.required(),
      merchant: rule.required()
    })
    return new BlibliMerchant().GetProductsBySearch(data)
  },
  GetCategories: (data) => {
    validate(data, {
      categories: rule.required()
    })
  }
}