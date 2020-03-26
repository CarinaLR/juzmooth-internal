const Sequelize = require("sequelize");
const moment = require("moment");
const db = require("../database");

const Order = db.define("orders", {
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  clientFullName: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Revisar pedido",
    operatorsAliases: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  total: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    },
    get() {
      return this.getDataValue("total") / 100;
    }
  },
  orderDate: {
    type: Sequelize.DATE,
    get() {
      // const date = this.getDataValue("orderDate");
      // if (date)
      //   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      // return "";
      const date = moment();
      return date.format("YYYY-MM-DD");
    }
  }
});

module.exports = Order;
