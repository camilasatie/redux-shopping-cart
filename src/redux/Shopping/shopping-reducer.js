import * as actionsTypes from './shopping-types';

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Yellow Polaroid",
      description:
        "This Polaroid will keep you busy the entire day.",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1580933031135-74149c053f51?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Large Coffee Cup",
      description:
        "Get a big cup of coffee every morning before the day starts",
      price: 20.0,
      image:
        "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Books That CHANGED My Life",
      description:
        "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
      price: 150.0,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
    },
  ],
  cart: [], //{id, title, description, price, img, qty}
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_TO_CART:
      return {};
    case actionsTypes.REMOVE_FROM_CART:
      return {};
    case actionsTypes.ADJUST_QUANTITY:
      return {};
    case actionsTypes.LOAD_CURRENT_ITEM:
      return {};
    default: 
      return state;
  }
};

export default shopReducer;
