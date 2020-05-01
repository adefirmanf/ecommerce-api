const axios = require('axios')
const url = require('url')
const parseListResponse = require('../lib/parseListResponse')
const parseDetailResponse = require('../lib/parseDetailResponse')

class BlibliMerchant {
  constructor() {
    this._params = url.parse(process.env.BLIBLI_PRODUCTION || "https://blibli.com")
  }
  async GetProducts(spec) {
    this._params.pathname = `backend/product/products/pc--${spec.productId}/_summary`
    this._params.query = {
      selectedItemSku: spec.productSku
    }
    let Response;
    try {
      Response = await axios.get(url.format(this._params))
    } catch (err) {
      throw err
    }
    return parseDetailResponse(Response.data.data)
  }
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
    } catch (err) {
      throw new Error(err)
    }
    return parseListResponse(Response.data.data)
  }
  async GetCourier() { }
}

module.exports = BlibliMerchant