const BlibliMerchantService = require('../../blibli-merchant-service/')

class Products {
  async GetProductsBySearch(spec) {

    let listMerchant = []

    const merchant = new Map([
      ['blibli', BlibliMerchantService.Product.GetProductBySearch(spec)],
      // ['shopee', BlibliMerchantService.Product.GetProductBySearch(spec)]
    ])
    spec.merchant.map(n => {
      listMerchant.push({ merchant: n, service: merchant.get(n) })
    })

    let activeMerchant = []
    let results = await Promise.all(
      listMerchant.map((i) => {
        activeMerchant.push(i.merchant)
        return i.service
      })
    ).then(results => results).catch(err => { throw new Error(err) })

    results = results.map((n, i) => {
      return {
        data: n,
        merchant: activeMerchant[i]
      }
    })

    return results
  }
}

module.exports = Products