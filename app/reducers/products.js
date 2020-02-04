import axios from 'axios';

//ACTION TYPE
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

//ACTION CREATORS
export const getProducts = data => ({
  type: GET_PRODUCTS,
  products: data,
});

export const addProduct = newProduct => ({
  type: ADD_PRODUCT,
  products: newProduct,
});

export const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  productId,
});

//MIDDLEWARE AND REDUX-THUNK
export const gettingProducts = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/products');
      dispatch(getProducts(data));
    } catch (error) {
      dispatch(console.error(error));
    }
  };
};

export const getSingleProduct = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(getProducts(data));
    } catch (error) {
      dispatch(console.error(error));
    }
  };
};

export const newProduct = newProduct => {
  return async dispatch => {
    try {
      const { data } = await axios.post('/api/products', newProduct);
      dispatch(addProduct(data));
    } catch (error) {
      dispatch(console.error(error));
    }
  };
};

export const deleteProduct = id => {
  return async dispatch => {
    try {
      const { data } = await axios.delete(`/api/products/${id}`);
      dispatch(removeProduct(data));
    } catch (error) {
      dispatch(console.error(error));
    }
  };
};

//REDUCER
export default function reducerProducts(state = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    case ADD_PRODUCT:
      return [...state, action.newProduct];
    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.productId);
    default:
      return state;
  }
}
