const merchantName = "shopee"

module.exports = (data) => {
  if (data.items.length < 1) {
    return [{
      name: "",
      href: "",
      img: [],
      price: 0,
      priceDetails: {
        priceDisplay: 0,
        discount: 0,
        strikeDisplay: 0
      },
      attributes: [],
      review: {
        rating: 0,
        count: 0
      },
      brand: '',
      merchant: {
        name: merchantName,
        productId: "",
        sku: "",
        shopId: ""
      },
    }]
  }
  return data.items.map((n) => {
    let price

    return {
      name: n.name,
      href: "",
      img: n.images,
      category: n.catid,
      price: n.price,
      priceDetails: {
        priceDisplay: n.price,
        discount: n.show_discount,
        strikeDisplay: n.price_max || ""
      },
      attributes: n.tier_variations.map((j) => {
        return {
          optionListingType: j.name,
          values: j.options
        }
      }),
      review: {
        rating: n.item_rating.rating_star,
        count: n.item_rating.rating_count
      },
      brand: n.brand,
      merchant: {
        name: merchantName,
        productId: n.itemid,
        sku: n.itemid,
        shopId: n.shopid
      }
    }
  })
}