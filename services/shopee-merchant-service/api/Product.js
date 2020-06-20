const { validate, rule } = require("../../../helpers/validate");
const ShopeeMerchant = require("../service/");

module.exports = {
  GetProducts: async (data) => {
    validate(data, {
      productId: rule.required(),
      productSku: rule.required(),
    });
    return new ShopeeMerchant()
      .GetProducts(data)
      .catch((err) => console.log(err));
  },
  GetProductBySearch: async (data) => {
    validate(data, {
      search: rule.required(),
    });
    return new ShopeeMerchant().GetProductsBySearch(data);
  },
  GetCategories: (data) => {
    validate(data, {
      categories: rule.required(),
    });
  },
};
