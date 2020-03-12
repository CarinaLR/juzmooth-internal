import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getSingleProduct } from "../reducers/products";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id);
  }

  render() {
    console.log("PROPS Products->", this.props.products);
    console.log("PROPS Customers->", this.props.customers);
    return (
      <div className="singleProduct">
        <h1 className="selectedProduct">Este es tu producto seleccionado!</h1>
        <h2 className="singleName">{this.props.products.name}</h2>
        <img className="singleImg" src={this.props.products.imageUrl} />
        <p>{this.props.products.description}</p>

        <Link to="/products">Back</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state.customer ->", state.customers);
  return {
    products: state.products,
    customers: state.customers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: id => {
      dispatch(getSingleProduct(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
