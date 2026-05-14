const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DailyWeightLog = sequelize.define('DailyWeightLog', {
  wlog_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  recorded_at: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'daily_weight_logs',
  timestamps: true
});

module.exports = DailyWeightLog;