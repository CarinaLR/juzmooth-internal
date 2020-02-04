import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav>
        Juzmooth
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
          <a href="">Nuevo Producto</a>
        </Link>
        <Link to="/customers/newCustomer" className="link">
          <a href="">Nuevo Cliente</a>
        </Link>
        <Link className="link">
          <a href="">Ordenes</a>
        </Link>
        <Link className="link">
          <a href="">Entregas</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
