const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CustomMeal = sequelize.define('CustomMeal', {
  custom_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  meal_type: {
    type: DataTypes.ENUM('breakfast', 'lunch', 'dinner', 'snack'),
    allowNull: false
  },
  log_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  total_kcal: {
    type: DataTypes.FLOAT
  },
  total_protein: {
    type: DataTypes.FLOAT
  },
  total_carb: {
    type: DataTypes.FLOAT
  },
  total_fat: {
    type: DataTypes.FLOAT
  },
  is_within_limit: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'custom_meals',
  timestamps: true
});

module.exports = CustomMeal;