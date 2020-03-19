// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from "redux";
import products from "./products";
import customers from "./customers";
import orders from "./orders";

const rootReducer = combineReducers({
  products: products,
  customers: customers,
  orders: orders
});

export default rootReducer;
export * from "./products";
export * from "./customers";
export * from "./orders";
