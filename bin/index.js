require("dotenv").config();
const firebase = require("firebase");
require("firebase/auth");
require("firebase/firestore");

firebase.initializeApp(require("../firebase-config"));

const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  cors({
    credential: true,
    origin: ["https://caribaju.store", "http://wawangunawan.web.id"],
  })
);
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
  console.log("Blibli Mock : ", process.env.BLIBLI_MOCK);
  console.log(`[Port is listening on ${process.env.PORT}]`);
});

module.exports = app;
