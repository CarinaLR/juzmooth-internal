const Sequelize = require('sequelize');
const db = require('../database');

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://images.unsplash.com/flagged/photo-1557753478-b9fb74f39eb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80',
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Product;
