const Sequelize = require('sequelize');
const db = require('../database');

const Customer = db.define('customers', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  orderId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Order',
      key: 'id',
    },
  },
});

module.exports = Customer;
