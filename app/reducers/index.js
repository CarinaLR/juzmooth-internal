// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux';
import products from './products';
import customers from './customers';

const rootReducer = combineReducers({
  products: products,
  customers: customers,
});

export default rootReducer;
export * from './products';
export * from './customers';
