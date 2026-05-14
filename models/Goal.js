const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Goal = sequelize.define('Goal', {
  goal_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  goal_type: {
    type: DataTypes.ENUM('diet', 'cutting', 'bulk', 'lean_mass', 'recomp', 'dirty_bulk'),
    allowNull: false
  },
  target_weight: {
    type: DataTypes.FLOAT
  },
  tdee: {
    type: DataTypes.INTEGER
  },
  daily_kcal: {
    type: DataTypes.INTEGER
  },
  protein_g: {
    type: DataTypes.INTEGER
  },
  carb_g: {
    type: DataTypes.INTEGER
  },
  fat_g: {
    type: DataTypes.INTEGER
  },
  start_date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'goals',
  timestamps: true
});

module.exports = Goal;