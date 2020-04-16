// const Sequelize = require('sequelize');
// const db = require('../database');

// const Product = db.define('products', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     defaultValue:
//       'https://images.unsplash.com/photo-1487536988267-23b03fdfc3c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
//   },
//   description: {
//     type: Sequelize.TEXT,
//     allowNull: false,
//   },
// });

// module.exports = Product;

const Sequelize = require("sequelize");
const db = require("../database");

const Product = db.define("products", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://images.unsplash.com/photo-1487536988267-23b03fdfc3c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Product;
