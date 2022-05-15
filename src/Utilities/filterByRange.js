export const getFileterByPriceRange = (data, price) =>
  !data
    ? data.filter((eachProduct) => eachProduct.currentPrice >= price)
    : data;
