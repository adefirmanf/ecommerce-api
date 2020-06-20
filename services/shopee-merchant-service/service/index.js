// const axios = require('axios')
const fetch = require("node-fetch");
const url = require("url");
const parseDetailResponse = require("../lib/parseDetailResponse");
const parseResponse = require("../lib/parseResponse");

class ShopeeMerchant {
  constructor() {
    this._params = url.parse(
      process.env.SHOPEE_PRODUCTION || "https://shopee.co.id"
    );
  }
  async GetProducts(spec) {
    this._params.pathname = "api/v2/item/get";
    this._params.query = {
      itemid: spec.productId,
      shopid: spec.productSku,
    };
    let Response;
    if (String(process.env.SHOPEE_MOCK) == "true") {
      Response = require("./mock_get_detail.json");
    } else {
      try {
        console.log(url.format(this._params));
        Response = await fetch(
          url.format(this._params),
          {},
          {
            referrer: "https://shopee.co.id/",
            referrerPolicy: "no-referrer-when-downgrade",
            body: null,
            method: "GET",
            mode: "cors",
            credential: "include",
          }
        );
        Response = await Response.json();
      } catch (err) {
        console.log("ERROR", err);
      }
      return parseDetailResponse(Response.item);
    }
  }
  async GetProductsBySearch(spec) {
    this._params.pathname = "api/v2/search_items";
    this._params.query = {
      by: "relevancy",
      keyword: spec.search,
      limit: 50,
      newest: 0,
      order: "desc",
      page_type: "search",
      version: "2",
    };
    let Response;
    if (String(process.env.SHOPEE_MOCK) == "true") {
      Response = require("./mock_get_detail.json");
    } else {
      try {
        Response = await fetch(
          url.format(this._params),
          {
            headers: {
              accept: "*/*",
              "accept-language": "en-US,en;q=0.9,id;q=0.8,ja;q=0.7",
              "accept-encoding": "",
              "if-none-match-": "55b03-9ad45be17d154c72d84c4d63e094f2cc",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-api-source": "pc",
              referer: "https://shopee.co.id/search?keyword=" + spec.search,
              "x-requested-with": "XMLHttpRequest",
              "x-shopee-language": "id",
              "user-agent":
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:77.0) Gecko/20100101 Firefox/77.0",
            },
            TE: "Trailers",
          },
          {
            referrer: "https://shopee.co.id/",
            referrerPolicy: "no-referrer-when-downgrade",
            body: null,
            method: "GET",
            mode: "cors",
            credential: "include",
          }
        );
        Response = await Response.json();
      } catch (err) {
        console.log(err);
      }
      return parseResponse(Response);
    }
  }

  async GetCourier() {}
}

module.exports = ShopeeMerchant;
