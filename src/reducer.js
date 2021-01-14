import { UPDATE_QUANTITY, REMOVE_FROM_CART } from "./actions";
import data from "./data.json";

const DEFAULT_STATE = { products: data.products, cart: {} };
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_QUANTITY:
      return { ...state, cart: { ...state.cart, [action.id]: action.qty } };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: Object.fromEntries(
          Object.entries(state.cart).filter((item) => item[0] !== action.id)
        ),
      };

    default:
      return state;
  }
};
export default reducer;
