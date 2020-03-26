import React, { Component } from "react";
import { connect } from "react-redux";
import {
  checkoutThunk,
  addOrderThunk,
  removeOneThunk,
  deleteAllThunk
} from "../reducers/orders";

class Orders extends Component {
  render() {
    // const { orders, customers } = this.props;
    return (
      <div>
        <h1> Lista de Pedidos </h1>
        <table className="checkout">
          {/* <tbody>
            {orders.map(elem => (
              <tr key={elem.product.id}>
                <td>{elem.product.clientFullName}</td>
                <td>{elem.product.total}</td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      this.props.addToCart(
                        elem.product,
                        this.props.customers.id
                      )
                    }
                  >
                    +
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      this.props.removeOneFromOrder(
                        elem.product,
                        this.props.customers.id
                      )
                    }
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      this.props.deleteAllFromOrder(
                        elem.product,
                        this.props.customers.id
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}

          <tbody>
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
    checkout: customerId => dispatch(checkoutThunk(customerId)),
    addToOrder: (product, customerId) =>
      dispatch(addOrderThunk(product, customerId)),
    removeOneFromOrder: (product, customerId) =>
      dispatch(removeOneThunk(product, customerId)),
    deleteAllFromOrder: (product, customerId) =>
      dispatch(deleteAllThunk(product, customerId))
  };
};

export default connect(mapStateToProps, mapDispatch)(Orders);
