'use strict';

const db = require('./database');
const Product = require('./models/Product');
const Customer = require('./models/Customer');
const Order = require('./models/Order');

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
//
// const Puppy = require('./puppy')
// const Owner = require('./owner')

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!
// Example:
//
// Puppy.belongsTo(Owner)

//ASSOCIATIONS
Order.hasOne(Customer);
Customer.belongsTo(Order);

Product.hasMany(Order);
Order.belongsTo(Product);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Customer,
  Product,
  Order,
};
