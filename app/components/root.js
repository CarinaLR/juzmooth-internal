import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProductsList from './ProductsList';
import CustomersList from './CustomersList';
import SingleProduct from './SingleProduct';
import SingleCustomer from './SingleCustomer';
import NewProductForm from './NewProductForm';
import NewCustomerForm from './newCustomerForm';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link to="/" className="link">
            <a href="">Home</a>
          </Link>
          <Link to="/products" className="link">
            <a href="">Productos</a>
          </Link>
          <Link to="/customers" className="link">
            <a href="">Clientes</a>
          </Link>
          <Link to="/products/newProduct" className="link">
            <a href="">Product</a>
          </Link>
          <Link to="/customers/newCustomer" className="link">
            <a href="">Customer</a>
          </Link>
          <Link className="link">
            <a href="">Ordenes</a>
          </Link>
          <Link className="link">
            <a href="">Entregas</a>
          </Link>
        </nav>
        <main>
          <h1>Juzmooth</h1>
          <p>Habitos sanos para todos los dias.</p>
          <img
            src={
              'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1405&q=80'
            }
          />
          <Switch>
            <Route exact path="/" />
            <Route exact path="/products" component={ProductsList} />
            <Route exact path="/customers" component={CustomersList} />
            <Route
              exact
              path="/products/newProduct"
              component={NewProductForm}
            />
            <Route
              exact
              path="/customers/newCustomer"
              component={NewCustomerForm}
            />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route exact path="/customers/:id" component={SingleCustomer} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
