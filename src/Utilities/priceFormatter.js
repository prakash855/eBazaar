export const priceFormatter = (price) =>
  new Intl.NumberFormat("en-IN").format(price);
