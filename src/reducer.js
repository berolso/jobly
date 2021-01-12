import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";
import data from "./data.json";

const DEFAULT_STATE = { products: data.products };
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: { ...state.cart, action } };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: { ...state.cart.filter((item) => item !== action.payload) },
      };

    default:
      return state;
  }
};
export default reducer;
