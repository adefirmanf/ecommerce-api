const BlibliMerchantService = require("../../blibli-merchant-service/");
const ShopeeMerchantService = require("../../shopee-merchant-service/");

class Products {
  async GetProduct(spec) {
    const merchant = new Map([
      ["blibli", BlibliMerchantService.Product.GetProducts(spec)],
      ["shopee", ShopeeMerchantService.Product.GetProducts(spec)],
    ]);
    return await merchant.get(spec.merchant);
  }
  async GetProductsBySearch(spec) {
    let listMerchant = [];

    const merchant = new Map([
      ["blibli", BlibliMerchantService.Product.GetProductBySearch(spec)],
      ["shopee", ShopeeMerchantService.Product.GetProductBySearch(spec)],
    ]);

    spec.merchant.map((n) => {
      listMerchant.push({ merchant: n, service: merchant.get(n.trim()) });
    });

    let activeMerchant = [];
    let results = await Promise.all(
      listMerchant.map((i) => {
        activeMerchant.push(i.merchant);
        return i.service;
      })
    )
      .then((results) => results)
      .catch((err) => {
        throw err;
      });

    results = results.map((n, i) => {
      return {
        data: n || [],
        merchant: activeMerchant[i],
      };
    });
    return results;
  }
}

module.exports = Products;
