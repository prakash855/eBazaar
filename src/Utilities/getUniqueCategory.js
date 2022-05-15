export const getUniqueCategory = (products) => {
  const uniqueCategory = products.map((product) => product.categoryName);
  return [...new Set(uniqueCategory)];
};
