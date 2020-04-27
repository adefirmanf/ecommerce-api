const { validate, rule } = require('../../../helpers/validate')
const ShopeeMerchant = require('../service/')

module.exports = {
  GetProducts: () => { },
  GetProductBySearch: async (data) => {
    validate(data, {
      search: rule.required()
    })
    return new ShopeeMerchant().GetProductsBySearch(data)
  },
  GetCategories: (data) => {
    validate(data, {
      categories: rule.required()
    })
  }
}