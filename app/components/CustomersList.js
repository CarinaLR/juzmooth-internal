import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gettingCustomers, deleteCustomer } from '../reducers/customers';
import { Link } from 'react-router-dom';

class CustomersList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.gettingCustomers();
  }

  deleteButton(customerId) {
    try {
      this.props.deleteCustomer(customerId);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="customerContainer">
        <h1 id="customerTitle">CLIENTES</h1>
        <p id="customerNote">
          Si necesitas mas informacion, por favor ingresa tu autorizacion.
        </p>
        <div>
          <img id="clientsPage" src={'./assets/jBottle.jpg'} />
        </div>
        {this.props.customers.map(customer => (
          <ul className="customerListContainer" key={customer.id}>
            <Link to={`/customers/${customer.id}`}>
              <li>
                {customer.firstName}
                {'\n'}
                {customer.lastName}
              </li>
            </Link>
            <button
              className="customerButton"
              type="delete"
              onClick={() => {
                this.deleteButton(customer.id);
              }}
            >
              Remove Customer
            </button>
            <button className="customerButton" type="description">
              Description
            </button>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    customers: state.customers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gettingCustomers: () => {
      dispatch(gettingCustomers());
    },
    deleteCustomer: id => {
      dispatch(deleteCustomer(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersList);
