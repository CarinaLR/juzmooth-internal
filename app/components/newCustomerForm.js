import React, { Component } from 'react';
import { newCustomer } from '../reducers/customers';
import { connect } from 'react-redux';

class NewCustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      description: '',
      errorMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const address = event.target.address.value;
    const description = event.target.description.value;

    const newData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      description: description,
    };

    try {
      this.props.newCustomer(newData);
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        description: '',
        errorMessage: '',
      });
    } catch (error) {
      console.error(error);
      this.setState({ errorMessage: 'There was a problem adding customer' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <h1>Nuevo Cliente</h1>
        <label>
          Nombre:
          <br />
          <input
            type="text"
            id="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
        </label>
        <br />
        <label>
          Apellido:
          <br />
          <input
            type="text"
            id="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
        </label>
        <br />
        <label>
          Email:
          <br />
          <input
            type="text"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>
        <br />
        <label>
          Direccion:
          <br />
          <input
            type="text"
            id="address"
            onChange={this.handleChange}
            value={this.state.address}
          />
        </label>
        <br />
        <label>
          Pedido:
          <br />
          <input
            type="text"
            id="order"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </label>
        <br />
        <button type="submit">Submit New Customer</button>
      </form>
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
    newCustomer: data => {
      dispatch(newCustomer(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCustomerForm);
