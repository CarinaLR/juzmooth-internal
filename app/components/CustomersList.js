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
      <div>
        <h1>CLIENTES</h1>
        <h2>Nombres</h2>
        {this.props.customers.map(customer => (
          <ul key={customer.id}>
            <Link to={`/students/${customer.id}`}>
              <li>
                {customer.firstName}
                {'\n'}
                {customer.lastName}
              </li>
            </Link>
            <button
              type="delete"
              onClick={() => {
                this.deleteButton(customer.id);
              }}
            >
              Remove Customer
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
