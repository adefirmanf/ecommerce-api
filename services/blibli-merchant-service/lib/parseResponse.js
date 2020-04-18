module.exports = (data) => {
  if (data.products.length < 1) {
    return [{
      name: "",
      href: "",
      img: [],
      price: 0
    }]
  }
  return data.products.map((n) => {
    let price

    return {
      name: n.name,
      href: n.url,
      img: n.images,
      price: n.price.minPrice
    }
  })
}