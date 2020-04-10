const app = require('./bin')
const authRoutes = require('./routes/authRoute')
const productRoutes = require('./routes/productRoute')

app.use("/auth", authRoutes)
app.use("/products", productRoutes)

app.use("*", (req, res, next) => {
  res.sendStatus(404)
})