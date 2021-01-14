// actionTypes
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const updateItemQuantity = (id, qty) => ({
  type: UPDATE_QUANTITY,
  id,
  qty,
});
export const removeItem = (id) => ({ type: REMOVE_FROM_CART, id });
