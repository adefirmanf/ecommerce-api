
module.exports = (data) => {
  return {
    productId: data.code,
    sku: data.sku,
    name: data.name,
    href: data.url,
    img: data.images,
    description: data.description
  }
}