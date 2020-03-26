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
              <th>Fecha de Entrega</th>
              <th>Status</th>
            </tr>
            {this.props.orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.clientFullName}</td>
                <td>{order.description}</td>
                <input id="date"></input>
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

/* <tbody>
            <tr>
              <th>OrdenID</th>
              <th>Cliente</th>
              <th>Pedido</th>
              <th>Fecha de Entrega</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Ivonne Lopez</td>
              <td>3 Ginger-Turmeric Shot</td>
              <td>Marzo 10, 2020</td>
              <td>En ruta</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jorge Jaramillo</td>
              <td>1 Cucumber Jugo Verde</td>
              <td>Marzo 10, 2020</td>
              <td>En ruta</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Santi Borrero</td>
              <td>2 Cucumber Jugo Verde</td>
              <td>Marzo 10, 2020</td>
              <td>En ruta</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Mercy Rodriguez</td>
              <td>4 Red Lemonade</td>
              <td>Marzo 11, 2020</td>
              <td>En proceso</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Patricio Lopez</td>
              <td>1 Plan Detox</td>
              <td>Marzo 11, 2020</td>
              <td>En proceso</td>
            </tr>
          </tbody>
        </table>
        <img id="allProductsImg" src={"./assets/jAll.jpg"} />
          </div> */
