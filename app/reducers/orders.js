import axios from "axios";

// //ACTION TYPE
// const ADD_TO_ORDER = "ADD_TO_ORDER";
// const CREATE_NEW_ORDER = "CREATE_NEW_ORDER";
// const CHECKOUT = "CHECKOUT";
// const REMOVE_PRODUCT = "REMOVE_PRODUCT";
// const REMOVE_ONE = "REMOVE_ONE";
// const DELETE_ALL = "DELETE_ALL";
// const GET_CUSTOMER = "GET_CUSTOMER";
// const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

// //ACTION CREATORS
// export const createNewOrder = () => ({
//   type: CREATE_NEW_ORDER
// });

// export const addToOrder = product => ({
//   type: ADD_TO_ORDER,
//   product
// });

// export const removeOne = product => ({
//   type: REMOVE_ONE,
//   product
// });

// export const checkout = () => ({
//   type: CHECKOUT
// });

// export const removeProduct = productId => ({
//   type: REMOVE_PRODUCT,
//   productId
// });

// export const deleteAllFromOrder = product => ({
//   type: DELETE_ALL,
//   product
// });

// //MIDDLEWARE AND REDUX-THUNK

// export const checkoutThunk = customerId => async dispatch => {
//   try {
//     await axios.put(`/api/customers/${customerId}/checkout`);
//     dispatch(checkout());
//   } catch (error) {
//     dispatch(console.error(error));
//   }
// };

// export const addOrderThunk = (product, customerId) => async dispatch => {
//   if (customerId) {
//     // perform an axios request to increment the threehouse in the logged-in user's cart,
//     await axios.put(
//       `api/customers/${customerId}/activeOrder/add/${product.id}`
//     );
//     //and then
//     dispatch(addToOrder(product));
//   } else {
//     dispatch(addToOrder(product));
//   }
// };

// export const removeOneThunk = (product, customerId) => async dispatch => {
//   if (customerId) {
//     await axios.put(
//       `api/customers/${customerId}/activeOrder/remove/${product.id}`
//     );
//     dispatch(removeOne(product));
//   } else {
//     dispatch(removeOne(product));
//   }
// };

// export const deleteAllThunk = (product, customerId) => async dispatch => {
//   if (customerId) {
//     await axios.delete(
//       `api/customers/${customerId}/activeOrder/delete/${product.id}`
//     );
//     dispatch(deleteAllFromOrder(product));
//   } else {
//     dispatch(deleteAllFromOrder(product));
//   }
// };

// //REDUCER
// export default function(order = [], action) {
//   switch (action.type) {
//     case ADD_TO_ORDER:
//       if (order.length !== 0) {
//         const matchingProduct = order.find(
//           element => element.product.id === action.product.id
//         );
//         if (matchingProduct) {
//           return order.map(element => {
//             if (element.product.id === action.product.id) {
//               element.quantity++;
//               return element;
//             }
//             return element;
//           });
//         }
//       }
//       return [...order, { product: action.product, quantity: 1 }];
//     case REMOVE_ONE:
//       {
//         if (order.length !== 0) {
//           const matchingProduct = order.find(
//             element => element.product.id === action.product.id
//           );
//           if (matchingProduct) {
//             const productsInOrder = order.map(element => {
//               if (element.product.id === action.product.id) {
//                 element.quantity--;
//                 return element;
//               }
//               return element;
//             });
//             return productsInOrder.filter(function(element) {
//               return element.quantity > 0;
//             });
//           }
//         }
//       }
//       break;
//     case CREATE_NEW_ORDER:
//       return [];
//     case GET_CUSTOMER:
//       return action.order;
//     case DELETE_ALL:
//       const newState = Object.assign([], order);

//       let indexOfProduct = order.findIndex(element => {
//         return element.product.id === action.product.id;
//       });
//       newState.splice(indexOfProduct, 1);
//       return newState;
//     case CHECKOUT:
//       return [];
//     case REMOVE_CUSTOMER:
//       return [];
//     default:
//       return order;
//   }
// }

//ACTION TYPE
const GET_ORDERS = "GET_ORDERS";
const GET_ORDER = "GET_ORDER";
const ADD_ORDER = "ADD_ORDER";
const REMOVE_ORDER = "REMOVE_ORDER";

//ACTION CREATORS
export const getOrders = data => ({
  type: GET_ORDERS,
  orders: data
});

export const getOneOrder = order => ({
  type: GET_ORDER,
  order
});

export const addOrder = newOrder => ({
  type: ADD_ORDER,
  orders: newOrder
});

export const removeOrder = orderId => ({
  type: REMOVE_ORDER,
  orderId
});

//MIDDLEWARE AND REDUX-THUNK
export const gettingOrders = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get("/api/orders");
      dispatch(getOrders(data));
    } catch (error) {
      dispatch(console.error(error));
    }
  };
};

export const getSingleOrder = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/orders/${id}`);
      dispatch(getOrders(data));
    } catch (error) {
      dispatch(console.error(error));
    }
  };
};

export const newOrder = newOrder => {
  return async dispatch => {
    try {
      const { data } = await axios.post("/api/orders", newOrder);
      dispatch(addOrder(data));
    } catch (error) {
      dispatch(console.error(error));
    }
  };
};

export const deleteOrder = id => {
  return async dispatch => {
    try {
      const { data } = await axios.delete(`/api/orders/${id}`);
      dispatch(removeOrder(data));
    } catch (error) {
      dispatch(console.error(error));
    }
  };
};

//REDUCER
export default function reducerOrders(state = [], action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders;
    case GET_ORDER:
      return action.order;
    case ADD_ORDER:
      return [...state, action.orders];
    case REMOVE_ORDER:
      return state.filter(order => order.id !== action.orderId);
    default:
      return state;
  }
}
