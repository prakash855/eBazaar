import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
// utilities
import { getFilterByCategory } from "../../../Utilities/filterByCategory";
import { getFileterByPriceRange } from "../../../Utilities/filterByRange";
import { getFilterByRating } from "../../../Utilities/filterByRating";
import { getUniqueCategory } from "../../../Utilities/getUniqueCategory";
import { getSortedProducts } from "../../../Utilities/PriceSort";
// action
import { GET_MAX_PRICE, GET_PRODUCTS } from "../../Action";
// reducer
import { StateReducer } from "../../Reducers/StataReducer";

const initialState = {
  products: [],
  filters: {
    rating: null,
    sortBy: null,
    maxPrice: "",
    minPrice: "",
    categoryName: [],
    priceRange: 900,
  },
};

const StateContext = createContext();

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(StateReducer, initialState);
  const {
    products,
    filters: { sortBy, rating, priceRange, categoryName },
  } = state;

  // Getting unique categoryName
  const uniqueCategory = getUniqueCategory(products);

  // sort by price
  const sortByPrice = getSortedProducts(products, sortBy);

  // filterd by category
  const filterByCategory = getFilterByCategory(sortByPrice, categoryName);

  // filter by Rating
  const filterByRating = getFilterByRating(filterByCategory, rating);

  // filter by price Range
  const filterByPriceRange = getFileterByPriceRange(filterByRating, priceRange);
  
  //filered data
  const filteredProducts = filterByPriceRange;

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get(`api/products`);

        dispatch({
          type: GET_PRODUCTS,
          payload: products,
        });

        dispatch({
          type: GET_MAX_PRICE,
          payload: products,
        });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <StateContext.Provider
      value={{ state, dispatch, filteredProducts, uniqueCategory }}
    >
      {children}
    </StateContext.Provider>
  );
};

const useDataContext = () => useContext(StateContext);

export { ProductContext, useDataContext };
