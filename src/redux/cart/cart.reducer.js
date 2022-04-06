import CartActionTypes from "./cart.types";
import { addItemtoCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        hidden: !state.hidden, //Se muestra si está oculta y viceversa
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemtoCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
