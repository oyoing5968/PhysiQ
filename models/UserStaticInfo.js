const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserStaticInfo = sequelize.define('UserStaticInfo', {
  static_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'user_static_info',
  timestamps: true
});

module.exports = UserStaticInfo;