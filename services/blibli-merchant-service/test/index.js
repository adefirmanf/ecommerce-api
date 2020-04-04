const blibli = require('..')
const sinon = require('sinon')
const axios = require('axios')
const assert = require('assert')
const mock = require('./mock')

describe("Blibli Merchant", () => {
  it("Should return valid properties", async () => {
    await sinon.stub(axios, "get").returns(mock)
    const results = await blibli.Product.GetProductBySearch({
      search: "kaos"
    })
    const validProperties = ["name", "href", "img", "price"]
    Object.keys(results[0]).map((n) => {
      assert.ok(validProperties.find(o => o == n), n)
    })
  })
})