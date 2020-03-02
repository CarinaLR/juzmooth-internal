import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gettingProducts, deleteProduct } from '../reducers/products';
import { Link } from 'react-router-dom';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentDidMount() {
    this.props.gettingProducts();
  }

  deleteButton(productId) {
    try {
      this.props.deleteProduct(productId);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="productListContainer">
        <h1 id="productTitle">PRODUCTOS</h1>
        <p className="note">Encuentra nuestros productos disponibles!</p>
        <div className="imgContainer">
          {this.props.products.map(product => (
            <ul key={product.id}>
              <Link to={`/products/${product.id}`}>
                <li>{product.name}</li>
                <img src={product.imageUrl} className="imgProducts" />
              </Link>
              <button
                className="prodButton"
                type="delete"
                onClick={() => {
                  this.deleteButton(product.id);
                }}
              >
                Remove Product
              </button>
              <button className="prodButton" type="description">
                Description
              </button>
            </ul>
          ))}
        </div>
        {/* {this.props.products.map(product => (
          <ul key={product.id}>
            <Link to={`/products/${product.id}`}>
              <li>{product.name}</li>
              <img src={product.imageUrl} className="imgProducts" />
            </Link>
            <button
              type="delete"
              onClick={() => {
                this.deleteButton(product.id);
              }}
            >
              Remove Product
            </button>
          </ul>
        ))} */}
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
    gettingProducts: () => {
      dispatch(gettingProducts());
    },
    deleteProduct: id => {
      dispatch(deleteProduct(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
