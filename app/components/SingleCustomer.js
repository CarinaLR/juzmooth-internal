import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleCustomer } from '../reducers/customers';
import { getSingleProduct } from '../reducers/products';

class SingleCustomer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleCustomer(this.props.match.params.id);
  }

  render() {
    console.log('state ->', this.props.customers);
    return (
      <div>
        <h1>CLIENTES</h1>
        <p>Informacion Disponible.</p>
        <h2>
          {this.props.customers.firstName}
          {'\n'}
          {this.props.customers.lastName}
        </h2>
        <p>
          Email:{'\n'}
          {this.props.customers.email}
        </p>
        <p>
          Direccion:{'\n'}
          {this.props.customers.address}
        </p>
        <p>
          Pedido:{'\n'}
          {this.props.customers.description}
        </p>
        <br />
        <Link to="/customers">Back</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state.customers ->', state.customers);
  return {
    products: state.products,
    customers: state.customers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleCustomer: id => {
      dispatch(getSingleCustomer(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCustomer);
