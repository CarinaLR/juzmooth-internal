import React, { Component } from "react";
import { connect } from "react-redux";
import {
  gettingOrders,
  getSingleOrder,
  newOrder,
  deleteOrder
} from "../reducers/orders";

class Orders extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.gettingOrders();
  }
  addButton(newOrder) {
    try {
      this.props.newOrder(newOrder);
    } catch (error) {
      console.error(error);
    }
  }
  deleteButton(orderId) {
    try {
      this.props.deleteOrder(orderId);
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <div>
        <h1> Lista de Pedidos </h1>
        <table className="checkout">
          <tbody>
            <tr>
              <th>OrdenId</th>
              <th>Cliente</th>
              <th>Pedido</th>
              <th>Fecha de Pedido</th>
              <th>Status</th>
            </tr>
            {this.props.orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.firstName}</td>
                <td>{order.description}</td>
                <td>{order.orderDate}</td>
                <td>{order.active}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <img id="allProductsImg" src={"./assets/jAll.jpg"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    customers: state.customers,
    orders: state.orders
  };
};

const mapDispatch = dispatch => {
  return {
    gettingOrders: () => dispatch(gettingOrders()),
    newOrder: newOrder => dispatch(newOrder(newOrder)),
    deleteOrder: orderId => dispatch(deleteOrder(orderId))
  };
};

export default connect(mapStateToProps, mapDispatch)(Orders);
