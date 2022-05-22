import { ADD_TO_WISHLIST } from "../Action";

export const wishListReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: payload,
      };
  }
};
