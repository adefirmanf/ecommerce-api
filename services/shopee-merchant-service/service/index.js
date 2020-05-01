// const axios = require('axios')
const fetch = require('node-fetch')
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
      Response = await fetch(url.format(this._params), {
        headers: {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9,id;q=0.8,ja;q=0.7",
          "if-none-match-": "55b03-e27feed0f3625bf597d23b7540a8529a",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-api-source": "pc",
          "x-requested-with": "XMLHttpRequest",
          "cookie": "SPC_IA=-1; SPC_F=OvCpxfOHwnKhVy7U3N97ZUrGvgAkH6Ck; REC_T_ID=d96580be-0478-11ea-ae23-b4969122ae10; _ga=GA1.3.1741528876.1573447571; G_ENABLED_IDPS=google; cto_lwid=47de81ea-26a2-4294-8e00-b0f6052f8492; _gcl_au=1.1.376870793.1582376018; SPC_EC=\"yZVFtHwyf6RqrlKsOQBmHJNspvAnQdRtytz812Q3CE5KkZKgkJjx79Qsh1TUWcVIbBwo0n3ZOp3uVTErfkQ6/zw+c3tAfhbTgtVIvF5N5YTGO7pxr9mxvvrUhtguD3d4xdi7KpSAlnmtewqz86VC34qGb7MH2crt169Ag5P9r08=\"; SPC_U=229496086; _gcl_aw=GCL.1587942383.CjwKCAjw4pT1BRBUEiwAm5QuR_kbGjrzmolWNy8JyeH2YXLB5PIhZvNYBQiRS74fMRUrHtuBglaNThoCScYQAvD_BwE; _gac_UA-61904553-8=1.1587942385.CjwKCAjw4pT1BRBUEiwAm5QuR_kbGjrzmolWNy8JyeH2YXLB5PIhZvNYBQiRS74fMRUrHtuBglaNThoCScYQAvD_BwE; _med=refer; SPC_SI=x6ijxwj0od0zqdzig9f0hhnng9pssbp7; _gid=GA1.3.971402131.1588264548; csrftoken=xhOY6hUonNiF9xOS8n4k9OAcUij26v5C; welcomePkgShown=true; AMP_TOKEN=%24NOT_FOUND; REC_MD_20=1588343466; SPC_CT_d780c38d=\"1588343406.bin4QWaPaUcdsBO5LDBe3tV2sd1cRVKWb6nDZFkd2TU=\"; _dc_gtm_UA-61904553-8=1; SPC_R_T_ID=\"n7Q70+M0o0B+uU3OPu4QNEjwYW4gE9zl6BLuYH25eR0wxUUSOl/4AJgOtMie4uti1+MuEFGx3PZTNKG54Q2mzQLEyJSOjGuAMEpI/JU0bE8=\"; SPC_T_IV=\"voLw8ZrJn70njxzg/soxYA==\"; SPC_R_T_IV=\"voLw8ZrJn70njxzg/soxYA==\"; SPC_T_ID=\"n7Q70+M0o0B+uU3OPu4QNEjwYW4gE9zl6BLuYH25eR0wxUUSOl/4AJgOtMie4uti1+MuEFGx3PZTNKG54Q2mzQLEyJSOjGuAMEpI/JU0bE8=\""
        }
      }, {
        "referrer": "https://shopee.co.id/search?keyword=kaos",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credential": "include"
      })
    } catch (err) {
      console.log(err)
    }
    return parseResponse(await Response.json())
  }
  async GetCourier() { }
}

module.exports = ShopeeMerchant
