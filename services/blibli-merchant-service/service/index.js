const url = require('url')
const parseListResponse = require('../lib/parseListResponse')
const parseDetailResponse = require('../lib/parseDetailResponse')

const axios = require('axios')
class BlibliMerchant {
  constructor() {
    this._params = url.parse("https://blibli.com")
  }
  async GetProducts(spec) {
    this._params.pathname = `backend/product/products/pc--${spec.productId}/_summary`
    this._params.query = {
      selectedItemSku: spec.productSku
    }
    let Response;
    try {
      if (!process.env.BLIBLI_MOCK) {
        Response = await axios.get(url.format(this._params), {
          headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,id;q=0.8,ja;q=0.7",
            "cache-control": "no-cache",
            "channelid": "web",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-b3-traceid": "036d0572ea57290d",
          }
        })
      }
      else {
        Response = require('./mock_get_detail.json')
      }
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
      if (!process.env.BLIBLI_MOCK) {
        Response = await axios.get(url.format(this._params), {
          headers: {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,id;q=0.8,ja;q=0.7",
            "cache-control": "no-cache",
            "channelid": "web",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-b3-traceid": "036d0572ea57290d",
          }
        })
      }
      else {
        Response = require('./mock.json')
      }
    }
    catch (err) {
      console.log(err)
      Response = {
        data: {
          data: []
        }
      }
      throw new Error(err)
    }
    return parseListResponse(Response.data.data)
  }
  async GetCourier() { }
}

module.exports = BlibliMerchant