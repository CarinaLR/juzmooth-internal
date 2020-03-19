import axios from "axios";

//ACTION TYPE
const ADD_TO_ORDER = "ADD_TO_ORDER";
const CREATE_NEW_ORDER = "CREATE_NEW_ORDER";
const CHECKOUT = "CHECKOUT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const REMOVE_ONE = "REMOVE_ONE";
const DELETE_ALL = "DELETE_ALL";

//INITIAL STATE

const initialState = [];

//ACTION CREATORS
export const createNewOrder = () => ({
  type: CREATE_NEW_ORDER
});

export const addToOrder = product => ({
  type: ADD_TO_ORDER,
  product
});

export const removeOne = product => ({
  type: REMOVE_ONE,
  product
});

export const checkout = () => ({
  type: CHECKOUT
});

export const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  productId
});

export const deleteAllFromOrder = product => ({
  type: DELETE_ALL,
  product
});

//MIDDLEWARE AND REDUX-THUNK

//REDUCER
