const merchantName = "blibli"

module.exports = (data) => {
  if (data.products.length < 1) {
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
  return data.products.map((n) => {
    let price

    return {
      name: n.name,
      href: n.url,
      img: n.images,
      category: n.rootCategory.name,
      price: n.price.minPrice,
      priceDetails: {
        priceDisplay: n.price.priceDisplay,
        discount: n.price.discount,
        strikeDisplay: n.price.strikeThroughPriceDisplay || ""
      },
      attributes: n.attributes.map((j) => {
        if (j.optionListingType == 'COLOR_PALETE') {
          j.optionListingType = 'Color'
        }
        return j
      }),
      review: {
        rating: n.review.rating,
        count: n.review.count
      },
      brand: n.brand,
      merchant: {
        name: merchantName,
        productId: n.id,
        sku: n.sku,
        shopId: n.merchantCode
      }
    }
  })
}