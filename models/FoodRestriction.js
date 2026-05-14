const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FoodRestriction = sequelize.define('FoodRestriction', {
  restriction_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  food_category: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'food_restrictions',
  timestamps: true
});

module.exports = FoodRestriction;