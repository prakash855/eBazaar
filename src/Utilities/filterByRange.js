export const getFileterByPriceRange = (data, price) =>
  data.filter((product) => product.price >= price);
