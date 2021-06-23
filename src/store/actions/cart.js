import * as types from '../types';

export const addToCart = (item) => {
  return {
    type: types.ADD_TO_CART,
    item,
  };
};

export const removeItem = (item) => {
  return {
    type: types.REMOVE_ITEM,
    item,
  };
};

export const subtractQuantity = (item) => {
  return {
    type: types.SUB_QUANTITY,
    item,
  };
};

export const addQuantity = (item) => {
  return {
    type: types.ADD_QUANTITY,
    item,
  };
};
