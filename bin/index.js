require('dotenv').config()

const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.listen(process.env.PORT, () => {
  console.log(`[Port is listening on ${process.env.PORT}]`)
})

module.exports = app