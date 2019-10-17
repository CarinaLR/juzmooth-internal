const Sequelize = require('sequelize');
const db = require('../database');

const Student = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      imageUrl: {
          type: Sequelize.STRING,
          defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrVDZwL1u-gvslOndx3HjtX4Ofi4gfsHR81aGRo09JsecDyRo'
      },
      gpa: {
          type: Sequelize.DECIMAL,
          validate: {
              min: 0.0,
              max: 4.0
          }
      }
});


module.exports = Student;

