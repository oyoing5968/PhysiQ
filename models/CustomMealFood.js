const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CustomMealFood = sequelize.define('CustomMealFood', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  custom_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  food_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount_g: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  estimated_kcal: {
    type: DataTypes.FLOAT
  }
}, {
  tableName: 'custom_meal_foods',
  timestamps: false
});

module.exports = CustomMealFood;