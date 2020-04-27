const axios = require('axios')
const url = require('url')
const parseResponse = require('../lib/parseResponse')

class ShopeeMerchant {
  constructor() {
    this._params = url.parse(process.env.SHOPEE_PRODUCTION || "https://shopee.co.id")
  }
  async GetProducts() { }
  async GetProductsBySearch(spec) {
    this._params.pathname = "api/v2/search_items"
    this._params.query =
    {
      by: "relevancy",
      keyword: spec.search,
      limit: 50,
      newest: 0,
      order: "desc",
      page_type: "search",
      version: "2"
    }
    let Response;
    try {
      Response = await axios.get(url.format(this._params))
    } catch (err) {
      console.log(err)
    }
    return parseResponse(Response.data)
  }
  async GetCourier() { }
}

module.exports = ShopeeMerchant
