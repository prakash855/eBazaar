import { HIGH_TO_LOW, LOW_TO_HIGH } from "../StateManagement/Action";

export const getSortedProducts = (data, sortBy) => {
  const copied = [...data];
  if (sortBy === HIGH_TO_LOW)
    copied.sort((a, b) => b.discountPrice - a.discountPrice);
  if (sortBy === LOW_TO_HIGH)
    copied.sort((a, b) => a.discountPrice - b.discountPrice);
  return copied;
};
