const axios = require('axios')
const url = require('url')
const parseResponse = require('../lib/parseResponse')

class BlibliMerchant {
  constructor() {
    this._params = url.parse(process.env.BLIBLI_PRODUCTION || "https://blibli.com")
  }
  async GetProducts() { }
  async GetProductsBySearch(spec) {
    this._params.pathname = "backend/search/products"
    this._params.query = {
      page: 1,
      start: 0,
      searchTerm: spec.search,
      intent: true,
      merchantSearch: true,
      multiCategory: true,
      customUrl: "",
      channelId: "web",
      showFacet: true
    }
    let Response;
    try {
      Response = await axios.get(url.format(this._params))
    } catch (err) { }
    return parseResponse(Response.data.data)
  }
  async GetCourier() { }
}

module.exports = BlibliMerchant