export const getMaxPrice = (products) =>
  Math.max(...products.map((product) => product.price));
