const passport = require('passport')
const facebookStrategy = require('passport-facebook')

class Auth {
  constructor() {
    this.config = {
      FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
      FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_APP_SECRET,
      FACEBOOK_CALLBACK_URL: process.env.FACEBOOK_CALLBACK_URL,
    }
  }
  async facebookAuth() {
    const strategyOptions = {
      clientID: this.config.FACEBOOK_APP_ID,
      clientSecret: this.config.FACEBOOK_CLIENT_SECRET,
      callbackURL: this.config.FACEBOOK_CALLBACK_URL,
      profileFields: ['id', 'displayName', 'emails', 'photos']
    }

    const verifyCallback = async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
      return done(profile)
    }

    passport.use('facebook', new facebookStrategy(strategyOptions, verifyCallback))
  }
  twitterAuth() { }
}

module.exports = Auth