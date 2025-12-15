import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActions";

const initialState = {
  items: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        items: [...state.items, action.payload]
      };

    case REMOVE_FROM_CART:
      return {
        items: state.items.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
}
