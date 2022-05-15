import {
  CLEAR_FILTER,
  FILTER_BY_RANGE,
  FILTER_BY_RATING,
  GET_CATEGORY,
  HIGH_TO_LOW,
  LOW_TO_HIGH,
  PRICE_RANGE,
} from "../../StateManagement/Action";
import { useDataContext } from "../../StateManagement/Contexts/StateContext/StateContext";
import "./Filter.css";

const Filter = () => {
  const { state, dispatch, uniqueCategory } = useDataContext();
  const {
    filters: { priceRange, maxPrice },
  } = state;

  return (
    <div className="sidebar">
      <div className="filter_and_Clear flex">
        <b className="filter_type">Filter</b>
        <button
          onClick={() => dispatch({ type: CLEAR_FILTER })}
          className="btn btn_link dark_link"
        >
          Clear
        </button>
      </div>
      <div className="product_price">
        <h4 className="filter_type">Price</h4>
        <h6 className="range_define flex">
          <span>{priceRange}</span>
          <span>{maxPrice}</span>
        </h6>
        <input
          type="range"
          className="input input_range"
          max={maxPrice}
          onMouseUp={(e) =>
            dispatch({ type: PRICE_RANGE, payload: e.target.value })
          }
        />
      </div>

      <div className="product_category flex">
        <h4 className="filter_type">Category</h4>
        {uniqueCategory.map((category, index) => (
          <label key={index}>
            <input
              checked={state.filters.categoryName.includes(category)}
              type="checkbox"
              onChange={() =>
                dispatch({ type: GET_CATEGORY, payload: category })
              }
            />
            {category}
          </label>
        ))}
      </div>

      <div className="product_rating flex">
        <b className="filter_type">Rating</b>
        <div>
          <input
            type="radio"
            htmlFor="four_and_above"
            name="rating"
            onChange={() => dispatch({ type: FILTER_BY_RATING, payload: 4 })}
            checked={state.filters.rating && state.filters.rating === 4}
          />
          <label for="four_and_above">4 stars & above</label>
        </div>

        <div>
          <input
            type="radio"
            htmlFor="three_and_above"
            name="rating"
            onChange={() => dispatch({ type: FILTER_BY_RATING, payload: 3 })}
            checked={state.filters.rating && state.filters.rating === 3}
          />
          <label for="three_and_above">3 stars & above</label>
        </div>

        <div>
          <input
            type="radio"
            htmlFor="two_and_above"
            name="rating"
            onChange={() => dispatch({ type: FILTER_BY_RATING, payload: 2 })}
            checked={state.filters.rating && state.filters.rating === 2}
          />
          <label for="two_and_above">2 stars & above</label>
        </div>

        <div>
          <input
            type="radio"
            htmlFor="one_and_above"
            name="rating"
            onChange={() => dispatch({ type: FILTER_BY_RATING, payload: 1 })}
            checked={state.filters.rating && state.filters.rating === 1}
          />
          <label for="one_and_above">1 star & above</label>
        </div>
      </div>

      <div className="product_rating flex">
        <b className="filter_type">Sort by</b>
        <div>
          <label>
            <input
              type="radio"
              for="sortBy"
              name="price"
              checked={
                state.filters.sortBy && state.filters.sortBy === LOW_TO_HIGH
              }
              onChange={() =>
                dispatch({ type: LOW_TO_HIGH, payload: LOW_TO_HIGH })
              }
            />
            Price- Low to High
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              for="sortBy"
              name="price"
              checked={
                state.filters.sortBy && state.filters.sortBy === HIGH_TO_LOW
              }
              onChange={() =>
                dispatch({ type: HIGH_TO_LOW, payload: HIGH_TO_LOW })
              }
            />
            Price- High to Low
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
