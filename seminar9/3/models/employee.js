const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Employee = sequelize.define("Employee", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 10],
        msg: "lungime incorecta a numelui",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  birthYear: {
    type: DataTypes.INTEGER,
    min: 1900,
  },
  salary: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
});

module.exports = Employee;
