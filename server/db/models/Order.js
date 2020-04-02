const Sequelize = require("sequelize");
const moment = require("moment");
const db = require("../database");

const Order = db.define("orders", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  orderDate: {
    type: Sequelize.DATE,
    get() {
      // you have to intall moment() in order to use date format. npm intall moment -> then require. Moment gives us the current date and time.
      const date = moment();
      return date.format("YYYY-MM-DD");
    }
  }
});

module.exports = Order;
