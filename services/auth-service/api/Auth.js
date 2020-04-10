const { validate, rule } = require('../../../helpers/validate')
const AuthService = require('../service')

module.exports = {
  LocalAuth: async (data) => {
    validate(data, {
      username: rule.required(),
      password: rule.required()
    })
  },
  FacebookAuth: async () => {
    return new AuthService().facebookAuth()
  },
  TwitterAuth: async (data) => {
    validate(data, {
      clientID: rule.required(),
      clientSecret: rule.required()
    })
    // return new BlibliMerchant().GetProductsBySearch(data)
  }
}