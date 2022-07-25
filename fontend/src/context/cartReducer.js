import { ADD_TO_CART, DELETE_FROM_CART } from "./actionTypes";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 }); // or {...state , cart : [...state.cart , {...action.payload.quantity:1}]}
      } else {
        const updatedItem = { ...updatedCart[index] };
        updatedItem.quantity++;
        updatedCart[index] = updatedItem;
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.offPrice,
        discount:
          state.discount + (action.payload.price - action.payload.offPrice),
      };
    }

    case DELETE_FROM_CART: {
      const cloneCart = [...state.cart];
      const index = cloneCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const cloneItem = { ...cloneCart[index] };
      if (cloneItem.quantity === 1) {
        const filtered = cloneCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filtered,
          total: state.total - action.payload.offPrice,
          discount:
            state.discount - (action.payload.price - action.payload.offPrice),
        };
      } else {
        cloneItem.quantity--;
        cloneCart[index] = cloneItem;
        return {
          ...state,
          cart: cloneCart,
          total: state.total - action.payload.offPrice,
          discount:
            state.discount - (action.payload.price - action.payload.offPrice),
        };
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
