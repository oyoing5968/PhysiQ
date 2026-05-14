const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Food = sequelize.define('Food', {
  food_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING
  },
  main_name: {
    type: DataTypes.STRING
  },
  kcal: {
    type: DataTypes.FLOAT
  },
  carb: {
    type: DataTypes.FLOAT
  },
  fat: {
    type: DataTypes.FLOAT
  },
  protein: {
    type: DataTypes.FLOAT
  }
}, {
  tableName: 'foods',
  timestamps: false
});

module.exports = Food;