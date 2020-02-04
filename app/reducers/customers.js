import axios from 'axios';

//ACTION TYPE
const GET_CUSTOMERS = 'GET_CUSTOMERS';
const GET_CUSTOMER = 'GET_CUSTOMER';
const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

//ACTION CREATORS
export const getCustomers = data => ({
  type: GET_CUSTOMERS,
  customers: data,
});

export const getOneCustomer = customer => ({
  type: GET_CUSTOMER,
  customer,
});

export const addCustomer = newCustomer => ({
  type: ADD_CUSTOMER,
  customers: newCustomer,
});

export const removeCustomer = customerId => ({
  type: REMOVE_CUSTOMER,
  customerId,
});

//MIDDLEWARE AND REDUX-THUNK
export const gettingCustomers = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/customers');
      dispatch(getCustomers(data));
    } catch (error) {
      dispatch(console.error(error));
    }
  };
};

export const getSingleCustomer = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/customers/${id}`);
      dispatch(getCustomers(data));
    } catch (error) {
      dispatch(console.error(error));
    }
  };
};

export const newCustomer = newCustomer => {
  return async dispatch => {
    try {
      const { data } = await axios.post('/api/customers', newCustomer);
      dispatch(addCustomer(data));
    } catch (error) {
      dispatch(console.error(error));
    }
  };
};

export const deleteCustomer = id => {
  return async dispatch => {
    try {
      const { data } = await axios.delete(`/api/customers/${id}`);
      dispatch(removeCustomer(data));
    } catch (error) {
      dispatch(console.error(error));
    }
  };
};

//REDUCER
export default function reducerCustomers(state = [], action) {
  switch (action.type) {
    case GET_CUSTOMERS:
      return action.customers;
    case GET_CUSTOMER:
      return action.customer;
    case ADD_CUSTOMER:
      return [...state, action.customers];
    case REMOVE_CUSTOMER:
      return state.filter(customer => customer.id !== action.customerId);
    default:
      return state;
  }
}
