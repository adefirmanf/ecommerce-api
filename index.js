const app = require('./bin')
const productRoutes = require('./routes/productRoute')

app.use("/products", productRoutes)

app.use("*", (req, res, next) => {
  res.sendStatus(404)
})