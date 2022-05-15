export const getFilterByRating = (data, rating) =>
  rating ? data.filter((product) => product.rating >= rating) : data;
