export const filterByRating = (products, rating) =>
  products.filter((product) => product.rating >= rating);
