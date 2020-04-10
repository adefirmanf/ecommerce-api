const authService = require('../services/auth-service')

module.exports = {
  LOCAL_LOGIN_AUTH: () => { },
  FACEBOOK_REDIRECT: async (req, res) => {
    res.redirect('/auth/facebook/')
  },
  FACEBOOK_LOGIN_AUTH: async (req, res) => { },
  FACEBOOK_LOGIN_CALLBACK: async (req, res) => {
    res.json("DONE!")
  },
  TWITTER_LOGIN_AUTH: () => { },
}