const router = require('express').Router()
const auth = require('../controllers/authController')
const serviceAuth = require('../services/auth-service/')
const passport = require('passport')
/**
 * Facebook Routes
 */
serviceAuth.Auth.FacebookAuth()
router.get("/facebook", passport.authenticate('facebook'))

router.get("/facebook/callback", passport.authenticate('facebook', {
  successRedirect: "/",
  failureRedirect: "/failed"
}))

router.get("/", (req, res) => {
  res.json("Yoooo")
})
/**
 * Twitter Routes
 */
router.get("/twitter")

/**
 * Google Routes
 */
router.get("/google")

module.exports = router