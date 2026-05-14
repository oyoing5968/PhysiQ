const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserDynamicInfo = sequelize.define('UserDynamicInfo', {
  dynamic_id: {
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
  body_fat_pct: {
    type: DataTypes.FLOAT
  },
  muscle_mass: {
    type: DataTypes.FLOAT
  }
}, {
  tableName: 'user_dynamic_info',
  timestamps: true
});

module.exports = UserDynamicInfo;