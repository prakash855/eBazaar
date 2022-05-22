import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";
import { WISHLIST_API } from "../../../Constants";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../../Action";
import { wishListReducer } from "../../Reducers/WishListReducer";
import { useAuth } from "../AuthContext/AuthContext";

const WishListContext = createContext();

const initialState = {
  wishList: [],
};

const WishListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishListReducer, initialState);
  const { token } = useAuth();

  const addToWishList = (product) => {
    if (state.wishList.find((theProduct) => theProduct._id === product._id)) {
      return;
    } else {
      (async () => {
        try {
          const {
            status,
            data: { wishlist },
          } = await axios.post(
            WISHLIST_API,
            { product },
            {
              headers: {
                authorization: token,
              },
            }
          );

          console.log(wishlist)

          status === 201 ? toast.success("Product Added to Cart") : null;

          dispatch({
            type: ADD_TO_WISHLIST,
            payload: wishlist,
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  const removeFromWishList = (product) => {
    (async () => {
      try {
        const {
          status,
          data: { wishlist },
        } = await axios.delete(`${WISHLIST_API}/${product._id}`, {
          headers: {
            authorization: token,
          },
        });

        status === 201 ? toast.success("Product Added to Cart") : null;

        dispatch({
          type: ADD_TO_WISHLIST,
          payload: wishlist,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <WishListContext.Provider
      value={{ state, dispatch, addToWishList, removeFromWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { useWishList, WishListProvider };
