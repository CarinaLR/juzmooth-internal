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

export const checkoutThunk = customerId => async dispatch => {
  try {
    await axios.put(`/api/customers/${customerId}/checkout`);
    dispatch(checkout());
  } catch (error) {
    dispatch(console.error(error));
  }
};

export const addOrderThunk = (product, customerId) => async dispatch => {
  if (customerId) {
    // perform an axios request to increment the threehouse in the logged-in user's cart,
    await axios.put(`api/users/${customerId}/activeCart/add/${product.id}`);
    //and then
    dispatch(addToOrder(product));
  } else {
    dispatch(addToOrder(product));
  }
};

export const removeOneThunk = (product, customerId) => async dispatch => {
  if (customerId) {
    await axios.put(
      `api/customers/${customerId}/activeOrder/remove/${product.id}`
    );
    dispatch(removeOne(product));
  } else {
    dispatch(removeOne(product));
  }
};

export const deleteAllThunk = (product, customerId) => async dispatch => {
  if (customerId) {
    await axios.delete(
      `api/customers/${customerId}/activeOrder/delete/${product.id}`
    );
    dispatch(deleteAllFromOrder(product));
  } else {
    dispatch(deleteAllFromOrder(product));
  }
};

//REDUCER
