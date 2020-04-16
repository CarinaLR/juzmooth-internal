"use strict";

const db = require("./database");
const Product = require("./models/Product");
const Customer = require("./models/Customer");
const Order = require("./models/Order");
// const customerOrder = require("./models/CustomerOrder");

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

//Expanding on the above, in cases where we have one source connected to multiple target use hasMany in asssociations. And use hasOne, and belongsTo insert the association key in different models from each other.
Product.belongsTo(Order);
Order.hasMany(Product);
Order.belongsTo(Customer);
Customer.hasMany(Order);

//====New Associations=====
// Order.hasOne(Customer);
// Customer.belongsToMany(Order, { through: customerOrder });
// Order.hasMany(Product);
// Product.belongsTo(Order);

// Customer.prototype.getActiveOrder = async function() {
//   const orders = await this.getOrders();
//   let order = orders.find(elem => elem.active);
//   if (order) return order;

//   const newOrder = await Order.create({ active: true });
//   await newOrder.setUser(this);
//   return newOrder;
// };

module.exports = {
  // Include your models in this exports object as well!
  db,
  Customer,
  Product,
  Order,
};
