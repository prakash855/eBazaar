export const productQuantity = (sum, product) => sum + product.qty;
export const totalPrice = (sum, product) => sum + product.price * product.qty;

export const totalMRP = (sum, product) =>
  sum + product.discountPrice * product.qty;
