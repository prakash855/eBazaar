import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";

// Actions
import {
  ADD_TO_CART,
  DECREMENT_CART_QUANTITY,
  DELETE_CART_QUANTITY,
  GET_CART,
  INCREMENT_CART_QUANTITY,
} from "../../Action";

import { CartReducer } from "../../Reducers/CartReducer";
import { useAuth } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";
import { CART_API } from "../../../Constants";

const CartContext = createContext();

const initialState = {
  loader: false,
  cart: [],
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const { cart } = state;
  const { token, user } = useAuth();
  console.log({ token, user });

  useEffect(() => {
    {
      token &&
        (async () => {
          try {
            const {
              data: { cart },
            } = await axios(CART_API, {
              headers: {
                authorization: token,
              },
            });

            dispatch({ type: GET_CART, payload: cart });
          } catch (error) {
            console.log(error);
          }
        })();
    }
  }, [token, user]);

  const addToCart = (product) => {
    if (cart.find((theProduct) => theProduct._id === product._id)) {
      return;
    } else {
      (async () => {
        try {
          const {
            status,
            data: { cart },
          } = await axios.post(
            CART_API,
            { product },
            {
              headers: {
                authorization: token,
              },
            }
          );

          status === 201 ? toast.success("Product Added to Cart") : null;

          dispatch({
            type: ADD_TO_CART,
            payload: cart,
            productId: product._id,
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  const incrementCartQuantity = async (product, type) => {
    const productId = product._id;
    try {
      const {
        data: { cart },
      } = await axios.post(
        `${CART_API}/${productId}`,
        {
          action: { type: type },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      dispatch({ type: INCREMENT_CART_QUANTITY, payload: cart });
    } catch (error) {
      console.log(error);
    }
  };

  const decrementCartQuantity = async (product, type) => {
    const productId = product._id;
    try {
      const {
        data: { cart },
      } = await axios.post(
        `${CART_API}/${productId}`,
        {
          action: { type: type },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      dispatch({ type: DECREMENT_CART_QUANTITY, payload: cart });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCartQuantity = async (product) => {
    const productId = product._id;
    try {
      const {
        status,
        data: { cart },
      } = await axios.delete(`${CART_API}/${productId}`, {
        headers: {
          authorization: token,
        },
      });

      status === 200 ? toast.info("Product Delete from cart") : null;

      dispatch({ type: DELETE_CART_QUANTITY, payload: cart });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        incrementCartQuantity,
        decrementCartQuantity,
        deleteCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
