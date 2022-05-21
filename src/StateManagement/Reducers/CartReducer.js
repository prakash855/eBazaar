import {
  ADD_TO_CART,
  DECREMENT_CART_QUANTITY,
  DELETE_CART_QUANTITY,
  GET_CART,
  INCREMENT_CART_QUANTITY,
} from "../Action";

const CartReducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case GET_CART:
      return {
        ...state,
        cart: payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: payload,
      };

    case INCREMENT_CART_QUANTITY:
      return {
        ...state,
        cart: payload,
      };

    case DECREMENT_CART_QUANTITY:
      return {
        ...state,
        cart: payload,
      };

    case DELETE_CART_QUANTITY:
      return {
        ...state,
        cart: payload,
      };

    default:
      return state;
  }
};

export { CartReducer };
