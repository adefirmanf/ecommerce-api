const app = require("./bin");
const authRoutes = require("./routes/authRoute");
const productRoutes = require("./routes/productRoute");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

app.use("*", (req, res, next) => {
  res.sendStatus(404);
});
