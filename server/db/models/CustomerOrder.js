const Sequelize = require("sequelize");
const db = require("../database");

const CustomerOrder = db.define("CustomerOrder", {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});

module.exports = CustomerOrder;
