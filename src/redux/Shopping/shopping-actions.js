import * as actionsTypes from './shopping-types';

export const addToCart =(itemID) => {
  return {
    type: actionsTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    }
  }
}

export const removeFromCart = (itemID) => {
  return {
    type: actionsTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    }
  }
}

export const adjustQuantity = (itemID, value) => {
  return {
    type: actionsTypes.ADJUST_QUANTITY,
    payload: {
      id: itemID,
      qty: value,
    }
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: actionsTypes.LOAD_CURRENT_ITEM,
    payload: item
  }
}
