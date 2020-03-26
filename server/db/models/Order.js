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
      // you have to intall moment() in order to use date format. npm intall moment -> then require. Moment gives us the current date and time.
      const date = moment();
      return date.format("YYYY-MM-DD");
    }
  }
});

module.exports = Order;
