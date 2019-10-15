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
          defaultValue: 'https://vignette.wikia.nocookie.net/20thcenturyfox/images/a/aa/20100602024832Bart_Simpson.png/revision/latest/scale-to-width-down/310?cb=20160518200655'
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

