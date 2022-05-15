import { HIGH_TO_LOW, LOW_TO_HIGH } from "../StateManagement/Action";

export const getSortedProducts = (data, sortBy) => {
  if (sortBy === HIGH_TO_LOW)
    data.sort((a, b) => b.discountPrice - a.discountPrice);
  if (sortBy === LOW_TO_HIGH)
    data.sort((a, b) => a.discountPrice - b.discountPrice);
  return data;
};
