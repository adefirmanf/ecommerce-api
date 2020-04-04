const app = require('./bin')

app.use("/api/", (req, res, next) => {

})

app.use("*", (req, res, next) => {
  res.sendStatus(404)
})