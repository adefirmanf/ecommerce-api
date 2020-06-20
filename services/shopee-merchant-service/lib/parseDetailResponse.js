module.exports = (data) => {
  console.log(data);
  return {
    productId: data.itemid,
    sku: data.shopid,
    name: data.name,
    href: data.url,
    img: data.images.map((img) => "https://cf.shopee.co.id/file/" + img),
    description: data.description,
  };
};
