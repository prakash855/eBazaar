import { filterByRating } from "../../Utilities/filterByPrice";
import { filterByRange } from "../../Utilities/filterByRange";
import { getMaxPrice } from "../../Utilities/getMaxPrice";
import { highToLow, lowToHigh } from "../../Utilities/PriceSort";
import {
  CLEAR_FILTER,
  FILTER_BY_RANGE,
  FILTER_BY_RATING,
  GET_CATEGORY,
  GET_MAX_PRICE,
  GET_PRODUCTS,
  HIGH_TO_LOW,
  LOW_TO_HIGH,
  PRICE_RANGE,
} from "../Action";

export const StateReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case LOW_TO_HIGH:
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: payload,
        },
      };

    case HIGH_TO_LOW:
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: payload,
        },
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          sortBy: null,
          rating: null,
          categoryName: [],
          priceRange: 900,
        },
      };

    case GET_MAX_PRICE:
      return {
        ...state,
        filters: {
          ...state.filters,
          maxPrice: getMaxPrice(payload),
        },
      };

    case PRICE_RANGE:
      return {
        ...state,
        filters: {
          ...state.filters,
          priceRange: Number(payload),
        },
      };

    case FILTER_BY_RATING:
      if (payload) {
        return {
          ...state,
          filters: {
            ...state.filters,
            rating: payload,
          },
        };
      }

    case GET_CATEGORY:
      return state.filters.categoryName.includes(payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              categoryName: state.filters.categoryName.filter(
                (category) => category !== payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              categoryName: state.filters.categoryName.concat(payload),
            },
          };

    default:
      return state;
  }
};
