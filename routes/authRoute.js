const router = require('express').Router()
const auth = require('../controllers/authController')
const serviceAuth = require('../services/auth-service/')
// const passport = require('passport')
/**
 * Facebook Routes
 */
// serviceAuth.Auth.FacebookAuth()
router.get("/facebook", async (req, res) => {
  const results = await serviceAuth.Auth.FacebookAuth()
  console.log(results)
})


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