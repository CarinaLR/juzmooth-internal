import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProductsList from "./ProductsList";
import CustomersList from "./CustomersList";
import SingleProduct from "./SingleProduct";
import SingleCustomer from "./SingleCustomer";
import NewProductForm from "./NewProductForm";
import NewCustomerForm from "./NewCustomerForm";
import Home from "./Home";
import Orders from "./Orders";

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <h2>Juzmooth</h2>
          <Link to="/" className="link">
            <a href="/">Home</a>
          </Link>
          <Link to="/products" className="link">
            <a href="/products">Productos</a>
          </Link>
          <Link to="/customers" className="link">
            <a href="/customers">Clientes</a>
          </Link>
          <Link to="/products/newProduct" className="link">
            <a href="/products/newProduct">Nuevo Producto</a>
          </Link>
          <Link to="/customers/newCustomer" className="link">
            <a href="/customers/newCustomer">Nuevo Cliente</a>
          </Link>
          <Link to="/orders" className="link">
            <a href="/orders">Ordenes</a>
          </Link>
          <Link className="link">
            <a href="">Entregas</a>
          </Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" exact component={Home} />
            <Route exact path="/products" exact component={ProductsList} />
            <Route exact path="/customers" exact component={CustomersList} />
            <Route
              exact
              path="/products/newProduct"
              exact
              component={NewProductForm}
            />
            <Route
              exact
              path="/customers/newCustomer"
              exact
              component={NewCustomerForm}
            />
            <Route exact path="/products/:id" exact component={SingleProduct} />
            <Route
              exact
              path="/customers/:id"
              exact
              component={SingleCustomer}
            />
            <Route exact path="/orders" exact component={Orders} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
