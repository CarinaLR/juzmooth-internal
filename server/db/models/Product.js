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
      'https://www.depaul.edu/about/campuses/PublishingImages/FJG-DEPAUL1016-1020-1200x800.jpg',
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Product;
