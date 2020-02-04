import React, { Component } from 'react';
import { newProduct } from '../reducers/products';
import { connect } from 'react-redux';

class NewProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
    const name = event.target.name.value;
    const description = event.target.description.value;

    const newData = {
      name: name,
      address: address,
      description: description,
      errorMessage: '',
    };
    try {
      this.props.newProduct(newData);
      this.setState({
        name: '',
        description: '',
        errorMessage: '',
      });
    } catch (error) {
      console.error(error);
      this.setState({
        errorMessage: 'There was a problem creating new product',
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <br />
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <br />
        <label>
          Description:
          <br />
          <input
            type="text"
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
        </label>
        <br />
        <button type="submit">Submit New Product</button>
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
    newProduct: data => {
      dispatch(newProduct(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProductForm);
