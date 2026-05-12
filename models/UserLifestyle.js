const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserLifestyle = sequelize.define('UserLifestyle', {
  lifestyle_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  job_type: {
    type: DataTypes.STRING
  },
  sleep_hours: {
    type: DataTypes.FLOAT
  },
  meal_time_start: {
    type: DataTypes.TIME
  },
  meal_time_end: {
    type: DataTypes.TIME
  },
  workout_volume: {
    type: DataTypes.ENUM('low', 'medium', 'high')
  }
}, {
  tableName: 'user_lifestyle',
  timestamps: true
});

module.exports = UserLifestyle;