const Sequelize = require('sequelize');
const db = require('../database');

const Order = db.define('orders', {
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  clientFirstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  clientLastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  clientEmail: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  clientAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  orderDate: {
    type: Sequelize.DATE,
    get() {
      const date = this.getDataValue('orderDate');
      if (date)
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      return '';
    },
  },
});

module.exports = Order;
