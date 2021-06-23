import * as types from '../types';

const initialState = {
  cart: [],
  total: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      let existedItem = state.cart.find((item) => item.id === action.item.id);
      console.log('item', action.item);
      console.log('exist', existedItem);
      if (existedItem) {
        console.log('ada');
        action.item.quantity += 1;
        return {
          ...state,
          total: state.total + action.item.price,
        };
      } else {
        console.log('tidak');
        action.item.quantity = 1;
        let newTotal = state.total + action.item.price;

        return {
          ...state,
          cart: [...state.cart, action.item],
          total: newTotal,
        };
      }

    case types.REMOVE_ITEM:
      let newItem = state.cart.filter((item) => action.item.id !== item.id);

      //calculating the total
      let newTotal = state.total - action.item.price * action.item.quantity;
      console.log(action.item);
      return {
        ...state,
        cart: newItem,
        total: newTotal,
      };

    case types.ADD_QUANTITY:
      action.item.quantity += 1;
      let newTotals = state.total + action.item.price;
      return {
        ...state,
        total: newTotals,
      };

    case types.SUB_QUANTITY:
      if (action.item.quantity === 1) {
        let newItem = state.cart.filter((item) => action.item.id !== item.id);
        let newTotal = state.total - action.item.price;
        return {
          ...state,
          cart: newItem,
          total: newTotal,
        };
      } else {
        action.item.quantity -= 1;
        let newTotal = state.total - action.item.price;
        return {
          ...state,
          total: newTotal,
        };
      }

    default:
      return state;
  }
};

export default cart;
