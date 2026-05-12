const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DietLog = sequelize.define('DietLog', {
  log_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  food_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  meal_type: {
    type: DataTypes.ENUM('breakfast', 'lunch', 'dinner', 'snack'),
    allowNull: false
  },
  amount_g: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  estimated_kcal: {
    type: DataTypes.FLOAT
  },
  log_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'diet_logs',
  timestamps: true
});

module.exports = DietLog;